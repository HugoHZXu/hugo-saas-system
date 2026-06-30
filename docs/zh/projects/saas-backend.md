# hugo-saas-backend

本地多服务后端，为整个产品体系提供 API 支持。基于 SQLite + 合成 Demo 数据，无需外部依赖即可运行。

- **仓库**：[HugoHZXu/hugo-saas-backend](https://github.com/HugoHZXu/hugo-saas-backend)
- **技术栈**：NestJS · Koa · GraphQL · Prisma · SQLite · pnpm monorepo

## 服务组成

| 包 | 框架 | 职责 |
|---|---|---|
| `@hugo-saas/database` | Prisma + SQLite | 共享 Schema、迁移、Seed 数据 |
| `@hugo-saas/identity-service` | NestJS (REST) | Demo 账户切换，模拟不同角色权限场景 |
| `@hugo-saas/admin-bff` | Koa + GraphQL | 管理后台 BFF：组织、用户、成员、角色、活动日志 |
| `@hugo-saas/entitlement-service` | NestJS (REST + GraphQL) | 产品目录、Entitlement、Seat 分配、批量导入 |

## 本地端口

| 服务 | URL |
|---|---|
| Admin BFF GraphQL | `http://127.0.0.1:4010/graphql` |
| Admin BFF GraphiQL | `http://127.0.0.1:4010/graphiql` |
| Entitlement GraphQL | `http://127.0.0.1:4317/graphql` |
| Entitlement REST (Swagger) | `http://127.0.0.1:4317/docs` |
| Identity REST (Swagger) | `http://127.0.0.1:4320/docs` |

API 文档部署在 [GitHub Pages](https://hugohzxu.github.io/hugo-saas-backend/)（Swagger/Redoc + GraphQL SDL）。
