import { NextRequest, NextResponse } from "next/server";

function handshakeHtml(status: "success" | "error", payload: unknown) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html>
<html>
<body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body>
</html>`;
}

function respond(status: "success" | "error", payload: unknown) {
  const response = new NextResponse(handshakeHtml(status, payload), {
    headers: { "Content-Type": "text/html" },
  });
  response.cookies.delete("decap_oauth_state");
  return response;
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const expectedState = request.cookies.get("decap_oauth_state")?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    return respond("error", { message: "Invalid or expired OAuth state. Try logging in again." });
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return respond("error", { message: "OAuth app is not configured on the server." });
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });
  const tokenData = await tokenRes.json();

  if (!tokenRes.ok || tokenData.error || !tokenData.access_token) {
    return respond("error", {
      message: tokenData.error_description ?? "GitHub did not return an access token.",
    });
  }

  return respond("success", { token: tokenData.access_token, provider: "github" });
}
