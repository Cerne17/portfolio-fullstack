"use client";

import { useState } from "react";

// p5.js covers the common case for small runnable sketches (matches the
// nature-of-code-style interactive examples this feature targets). Sits
// inert for snippets that don't call setup()/draw().
const P5_CDN = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.2/p5.min.js";

function buildSrcDoc(code: string) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<script src="${P5_CDN}"><\/script>
<style>
  html, body { margin: 0; padding: 0; background: #fff; overflow: hidden; }
  body { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
  canvas { display: block; max-width: 100%; }
  #error { font-family: ui-monospace, monospace; color: #8C3B24; padding: 16px; white-space: pre-wrap; font-size: 13px; }
</style>
</head>
<body>
<div id="error"></div>
<script>
  function showError(text) {
    document.getElementById("error").textContent = text;
  }
  window.onerror = function (message) {
    showError(String(message));
    return true;
  };
  // p5's global-mode auto-init (setup()/draw() on window) runs inside a
  // Promise chain (Promise.all([...]).then(_globalInit)) — an error thrown
  // in the user's setup() surfaces as an unhandled rejection, not a normal
  // uncaught error, so window.onerror alone never sees it.
  window.addEventListener("unhandledrejection", function (event) {
    var reason = event.reason;
    showError((reason && reason.message) || String(reason));
  });
<\/script>
<script>
${code}
<\/script>
</body>
</html>`;
}

const buttonBaseStyle: React.CSSProperties = {
  padding: "6px 14px",
  fontSize: "0.8rem",
  fontFamily: "var(--font-mono)",
  fontWeight: 600,
  borderRadius: "var(--radius-sm)",
  cursor: "pointer",
};

export function RunnableCode({ code }: { code: string }) {
  const [running, setRunning] = useState(true);
  const [runId, setRunId] = useState(0);

  return (
    <div style={{ margin: "0 0 24px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => {
            if (running) {
              setRunning(false);
            } else {
              setRunId((n) => n + 1);
              setRunning(true);
            }
          }}
          style={{
            ...buttonBaseStyle,
            color: running ? "var(--text-muted)" : "var(--ink)",
            background: running ? "transparent" : "var(--heartwood)",
            border: running ? "1px solid var(--surface-2)" : "none",
          }}
        >
          {running ? "■ Stop" : "▶ Run"}
        </button>
      </div>
      {running && (
        <iframe
          key={runId}
          title="Runnable code output"
          sandbox="allow-scripts"
          srcDoc={buildSrcDoc(code)}
          style={{
            width: "100%",
            height: 440,
            marginTop: 8,
            border: "var(--border-hairline)",
            borderRadius: "var(--radius-md)",
            background: "#fff",
          }}
        />
      )}
    </div>
  );
}
