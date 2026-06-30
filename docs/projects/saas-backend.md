# hugo-saas-backend

Local multi-service backend that powers the entire product suite. Runs on SQLite with synthetic demo data — no external dependencies needed.

- **Repository**: [HugoHZXu/hugo-saas-backend](https://github.com/HugoHZXu/hugo-saas-backend)
- **Tech Stack**: NestJS · Koa · GraphQL · Prisma · SQLite · pnpm monorepo

## Services

| Package | Framework | Purpose |
|---|---|---|
| `@hugo-saas/database` | Prisma + SQLite | Shared schema, migrations, seed data |
| `@hugo-saas/identity-service` | NestJS (REST) | Demo account switching to simulate different role/permission scenarios |
| `@hugo-saas/admin-bff` | Koa + GraphQL | Admin BFF: organizations, users, memberships, roles, activity logs |
| `@hugo-saas/entitlement-service` | NestJS (REST + GraphQL) | Product catalog, entitlements, seat allocations, bulk imports |

## Local Ports

| Service | URL |
|---|---|
| Admin BFF GraphQL | `http://127.0.0.1:4010/graphql` |
| Admin BFF GraphiQL | `http://127.0.0.1:4010/graphiql` |
| Entitlement GraphQL | `http://127.0.0.1:4317/graphql` |
| Entitlement REST (Swagger) | `http://127.0.0.1:4317/docs` |
| Identity REST (Swagger) | `http://127.0.0.1:4320/docs` |

API docs are deployed on [GitHub Pages](https://hugohzxu.github.io/hugo-saas-backend/) (Swagger/Redoc + GraphQL SDL).
