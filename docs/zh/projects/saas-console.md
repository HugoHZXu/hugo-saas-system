# hugo-saas-console

B2B SaaS 运营管理后台，采用 Module Federation 微前端架构。

- **仓库**：[HugoHZXu/hugo-saas-console](https://github.com/HugoHZXu/hugo-saas-console)
- **技术栈**：React · TypeScript · Module Federation · GraphQL · pnpm monorepo · Vitest
- **UI 组件库**：`@hugo-ui/mui`

## 模块结构

```
packages/
├── admin-console/     # Host Shell，Module Federation 入口
├── admin-shared/      # 共享 session、auth、UI 工具
├── org-management/    # 组织管理 Remote（列表、详情、活动日志）
└── user-management/   # 用户管理 Remote（列表、详情、活动日志）
```

## 本地端口

| 服务 | URL |
|---|---|
| Admin Shell (host) | `http://127.0.0.1:5173` |
| Organization Management (remote) | `http://127.0.0.1:5174` |
| User Management (remote) | `http://127.0.0.1:5175` |

三个应用通过 Module Federation 独立部署，Host 在运行时加载 Remote 模块。
