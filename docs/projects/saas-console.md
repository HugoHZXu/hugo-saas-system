# hugo-saas-console

B2B SaaS admin dashboard built with Module Federation micro-frontend architecture.

- **Repository**: [HugoHZXu/hugo-saas-console](https://github.com/HugoHZXu/hugo-saas-console)
- **Tech Stack**: React · TypeScript · Module Federation · GraphQL · pnpm monorepo · Vitest
- **UI Library**: `@hugo-ui/mui`

## Module Structure

```
packages/
├── admin-console/     # Host shell, Module Federation entry point
├── admin-shared/      # Shared session, auth, and UI utilities
├── org-management/    # Organization Management remote (list, detail, activity)
└── user-management/   # User Management remote (list, detail, activity)
```

## Local Ports

| Service | URL |
|---|---|
| Admin Shell (host) | `http://127.0.0.1:5173` |
| Organization Management (remote) | `http://127.0.0.1:5174` |
| User Management (remote) | `http://127.0.0.1:5175` |

The three apps are independently deployed via Module Federation, with the host loading remote modules at runtime.
