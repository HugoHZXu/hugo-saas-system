[English](README.md) | 简体中文

# Hugo SaaS System

一套完整的 B2B SaaS 产品体系 Portfolio，涵盖后端服务、跨框架设计系统、Web 控制台、桌面工具，以及 AI 工程工具链。

📖 **文档站**：[https://hugohzxu.github.io/hugo-saas-system/](https://hugohzxu.github.io/hugo-saas-system/)

## 项目导航

### 产品体系

| 项目 | 技术栈 | 定位 | 仓库 |
|------|--------|------|------|
| hugo-saas-backend | NestJS · Koa · GraphQL · Prisma · SQLite · pnpm monorepo | 多服务本地后端：Identity Service、Admin BFF、Entitlement Service | [GitHub](https://github.com/HugoHZXu/hugo-saas-backend) |
| hugo-ui | React · Vue 3 · TypeScript · Tailwind · MUI · Storybook · Changesets | 跨框架设计系统（MUI React / shadcn React / shadcn Vue） | [GitHub](https://github.com/HugoHZXu/hugo-ui) |
| hugo-saas-console | React · TypeScript · Module Federation · GraphQL · pnpm monorepo | SaaS 运营后台：微前端架构，含组织管理、用户管理模块 | [GitHub](https://github.com/HugoHZXu/hugo-saas-console) |
| hugo-entitlement-console | Vue 3 · TypeScript · Pinia · TanStack Query/Table · Tailwind · Playwright | 授权管理控制台：产品目录、Seat 分配、审计日志 | [GitHub](https://github.com/HugoHZXu/hugo-entitlement-console) |
| hugo-entitlement-importer-desktop | Electron · Vue 3 · electron-vite · AntV G2 · Vitest | 桌面端授权批量导入工具：CSV 校验、影响预览、结果导出 | [GitHub](https://github.com/HugoHZXu/hugo-entitlement-importer-desktop) |

### 工程工具

| 项目 | 技术栈 | 定位 | 仓库 |
|------|--------|------|------|
| design-contract-mcp | TypeScript · MCP (Model Context Protocol) · Node.js | Figma-to-Code MCP Server：将 Figma 设计稿转化为 React 代码，通过 Contract-first 方式为 AI 编码工具提供设计上下文与代码校验 | [GitHub](https://github.com/HugoHZXu/design-contract-mcp) |

## 架构关系

```
hugo-entitlement-importer-desktop (Electron 桌面端)
         │
         ├── REST API ──► hugo-saas-backend ◄── GraphQL/REST ──┬── hugo-saas-console (React 微前端)
         │         ┌──────────┴──────────┐                     │
         │    @hugo-ui/shadcn-vue  @hugo-ui/mui                │
         │         │                     │                     │
         └─────────┴─────────────────────┴─────────────────────┘
                              hugo-ui (设计系统)
                                  ▲
                                  │ AI Contract (GitHub Release)
                                  │
                     design-contract-mcp (Figma-to-Code MCP Server: 上下文构建 + 代码校验)
```

- 所有前端项目共用 [hugo-ui](https://github.com/HugoHZXu/hugo-ui) 组件库
- [hugo-saas-console](https://github.com/HugoHZXu/hugo-saas-console) 使用 React + `@hugo-ui/mui`
- [hugo-entitlement-console](https://github.com/HugoHZXu/hugo-entitlement-console) 和桌面端使用 Vue 3 + `@hugo-ui/shadcn-vue`
- [design-contract-mcp](https://github.com/HugoHZXu/design-contract-mcp) 是 Figma-to-Code MCP Server，消费 hugo-ui 通过 GitHub Releases 发布的 AI Contract 产物，为 AI 编码工具（Cursor、Trae 等）提供设计上下文解析与 React 代码校验能力
