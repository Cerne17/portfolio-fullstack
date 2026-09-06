import { NextRequest, NextResponse } from "next/server";

function handshakeHtml(status: "success" | "error", payload: { message?: string; token?: string; provider?: string }) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const serverMessage =
    status === "success" ? "Token exchange succeeded." : `Sign-in failed: ${payload.message ?? "unknown error"}`;

  return `<!doctype html>
<html>
<head><link rel="icon" href="/icon.svg" type="image/svg+xml" /></head>
<body style="font-family: system-ui, sans-serif; padding: 40px; color: #1a1b1e;">
<p><strong>${serverMessage}</strong></p>
<p id="status">Talking to the admin tab…</p>
<p style="color: #5a5852; font-size: 0.85rem;">Running at: <code id="loc"></code></p>
<script>
(function () {
  document.getElementById("loc").textContent = window.location.href;
  var done = false;
  var statusEl = document.getElementById("status");

  if (!window.opener) {
    statusEl.textContent =
      "No opener window found — this page was opened directly, not as a popup from /admin. Close it and retry from /admin.";
    return;
  }

  function receiveMessage(e) {
    window.opener.postMessage(${JSON.stringify(message)}, e.origin);
    window.removeEventListener("message", receiveMessage, false);
    done = true;
    statusEl.textContent = "Sent to admin tab (replied from " + e.origin + "). ${status === "success" ? "Closing…" : "You can close this window."}";
    ${status === "success" ? "setTimeout(function () { window.close(); }, 1500);" : ""}
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");

  // Some Decap versions don't reply to the ping above — fall back to a broadcast send.
  setTimeout(function () {
    if (!done) {
      window.opener.postMessage(${JSON.stringify(message)}, "*");
      statusEl.textContent = "No reply from admin tab — sent anyway as a broadcast. If /admin is still showing the login screen, tell your dev the 'Running at' URL above.";
    }
  }, 800);
})();
</script>
</body>
</html>`;
}

function respond(status: "success" | "error", payload: { message?: string; token?: string; provider?: string }) {
  const response = new NextResponse(handshakeHtml(status, payload), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
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
