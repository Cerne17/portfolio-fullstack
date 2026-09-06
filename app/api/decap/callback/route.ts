import { NextRequest, NextResponse } from "next/server";

function handshakeHtml(status: "success" | "error", payload: { message?: string; token?: string; provider?: string }) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const visibleMessage =
    status === "success"
      ? "Signed in — you can close this window."
      : `Sign-in failed: ${payload.message ?? "unknown error"}`;

  return `<!doctype html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 40px; color: ${status === "success" ? "#1a1b1e" : "#8c3b24"};">
<p id="status">${visibleMessage}</p>
<script>
(function () {
  var done = false;
  function send() {
    if (!window.opener) {
      document.getElementById("status").textContent =
        "No opener window found — this page was likely opened directly. Close it and try Login with GitHub again from /admin.";
      return;
    }
    function receiveMessage(e) {
      window.opener.postMessage(${JSON.stringify(message)}, e.origin);
      window.removeEventListener("message", receiveMessage, false);
      done = true;
      ${status === "success" ? "setTimeout(function () { window.close(); }, 300);" : ""}
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
    // Some Decap versions don't reply to the ping above — fall back to a direct send.
    setTimeout(function () {
      if (!done) window.opener.postMessage(${JSON.stringify(message)}, "*");
    }, 500);
  }
  send();
})();
</script>
</body>
</html>`;
}

function respond(status: "success" | "error", payload: { message?: string; token?: string; provider?: string }) {
  const response = new NextResponse(handshakeHtml(status, payload), {
    headers: { "Content-Type": "text/html" },
  });
  response.cookies.set("decap_oauth_state", "", { maxAge: 0, path: "/api/decap", domain: ".cerne.pro" });
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
