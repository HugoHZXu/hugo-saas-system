# hugo-entitlement-importer-desktop

Desktop tool for bulk-importing SaaS entitlement assignments, built with Electron + Vue 3.

- **Repository**: [HugoHZXu/hugo-entitlement-importer-desktop](https://github.com/HugoHZXu/hugo-entitlement-importer-desktop)
- **Tech Stack**: Electron · Vue 3 · TypeScript · electron-vite · Pinia · vue-i18n · AntV G2 · Vitest · pnpm monorepo
- **UI Library**: `@hugo-ui/shadcn-vue`

## Import Workflow

1. Sign in with an identity account and select an entitlement organization
2. Load available products and entitlements for that org
3. Upload a CSV — parsed locally
4. Local validation catches: missing email, invalid email format, unrecognized action, duplicate emails, conflicting actions on the same email
5. A backend import job is created; server-side validation checks: unregistered emails, users outside the org, entitlement state, seat limit impact
6. Review merged results in the table — edit rows, remove problematic rows, or skip warnings
7. A separate chart window shows seat occupancy impact before committing
8. Commit the job — the app polls until processing finishes
9. Export a result package (.zip) containing an XLSX summary and success/failure CSVs

## Monorepo Structure

```
packages/
├── web/       # Vue renderer process
├── electron/  # Electron main + preload
└── charts/    # Shared G2 chart components
```

Charts open in a separate Electron window, communicating via IPC.

## CSV Format

| Column | Required | Description |
|---|---|---|
| `email` | Yes | Trimmed and lowercased for duplicate detection |
| `name` | No | Trimmed, passed through to backend |
| `department` | No | Trimmed, passed through to backend |
| `action` | No | `assign` (default) or `revoke` |
