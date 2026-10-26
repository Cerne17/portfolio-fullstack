# cerne-blog MCP

Local MCP server for maintaining cerne.pro content straight in the repo — no Decap rich-text round-trip. Registered for Claude Code in the repo's `.mcp.json`.

```bash
cd mcp && npm install   # once; Node >= 23.6 runs the .ts sources directly
```

**Schema:** read from `public/admin/config.yml`, so the MCP and Decap always agree. Article bodies are also checked with KaTeX (unbalanced `$$`, Decap-escaped `\_ \[ \]`, unparseable LaTeX).

| Tool | Does |
|---|---|
| `content_status` | Published/draft posts, latest /now, projects, git sync state |
| `list_content`, `get_content`, `validate_content` | Read and check entries |
| `create_post` | New article — always `draft: true` |
| `update_post`, `set_post_draft` | Edit, publish/unpublish |
| `upsert_now_entry`, `upsert_project` | /now line, project card |
| `add_upload` | Copy a file into `public/uploads` |
| `sync` | `git pull --rebase` (Decap commits to main too) |
| `ship` | Validate → `npm run build` → commit `content/` + `public/uploads` only → rebase → push. Two-step: `confirm: false` shows the plan, `confirm: true` pushes |
| `weekly_context`, `journal_write`, `backlog_list`, `backlog_upsert` | Private journal for the weekly interview |

The journal lives outside the repo (it's public): `../journal/` by default, override with `CERNE_JOURNAL_DIR`. `CERNE_REPO` overrides the repo root.

The weekly interview itself is the `weekly-interview` skill in `.claude/skills/`.
