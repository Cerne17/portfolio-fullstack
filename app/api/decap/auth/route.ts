import { NextResponse } from "next/server";

// Must exactly match the GitHub OAuth App's registered callback URL.
// www, not apex — Vercel redirects cerne.pro -> www.cerne.pro, so www is
// the domain requests actually land on.
const CANONICAL_ORIGIN = "https://www.cerne.pro";

export async function GET() {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse("GITHUB_OAUTH_CLIENT_ID is not configured.", { status: 500 });
  }

  const state = crypto.randomUUID();
  const redirectUri = `${CANONICAL_ORIGIN}/api/decap/callback`;

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl.toString());
  response.cookies.set("decap_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 600,
    path: "/api/decap",
    // Shared across apex/www so the cookie survives a redirect between them
    // between here and /callback.
    domain: ".cerne.pro",
  });
  return response;
}
