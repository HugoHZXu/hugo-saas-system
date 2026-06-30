# 架构概览

## 系统组成

```mermaid
graph TD
    subgraph Desktop[桌面端]
        Importer[hugo-entitlement-importer-desktop<br/>Electron + Vue 3]
    end

    subgraph Console[Web 控制台]
        SaaSConsole[hugo-saas-console<br/>React + Module Federation]
        EntConsole[hugo-entitlement-console<br/>Vue 3 + Pinia]
    end

    subgraph Backend[后端服务]
        BFF[admin-bff<br/>Koa + GraphQL]
        EntSvc[entitlement-service<br/>NestJS + REST/GraphQL]
        IDSvc[identity-service<br/>NestJS + REST]
        DB[(Prisma + SQLite)]
    end

    subgraph DesignSystem[设计系统]
        UI[hugo-ui<br/>React + Vue 组件库]
    end

    Importer -->|REST| EntSvc
    Importer -->|REST| IDSvc
    SaaSConsole -->|GraphQL| BFF
    EntConsole -->|GraphQL/REST| EntSvc
    EntConsole -->|REST| IDSvc
    BFF --> DB
    EntSvc --> DB
    IDSvc --> DB
    SaaSConsole -->|@hugo-ui/mui| UI
    EntConsole -->|@hugo-ui/shadcn-vue| UI
    Importer -->|@hugo-ui/shadcn-vue| UI
```

## 后端服务

| 包 | 框架 | 职责 |
|---|---|---|
| `@hugo-saas/database` | Prisma + SQLite | 共享 Schema、迁移、Seed 数据 |
| `@hugo-saas/identity-service` | NestJS (REST) | Demo 账户切换，模拟不同角色权限场景 |
| `@hugo-saas/admin-bff` | Koa + GraphQL | 管理后台 API：组织、用户、成员、角色、活动日志 |
| `@hugo-saas/entitlement-service` | NestJS (REST + GraphQL) | 产品目录、授权、Seat 分配、批量导入 |

## 前端技术栈对照

| 项目 | 框架 | UI 组件库 | 状态管理 | API 风格 |
|---|---|---|---|---|
| hugo-saas-console | React + TypeScript | `@hugo-ui/mui` (MUI + Emotion) | Module Federation 拆分 | GraphQL |
| hugo-entitlement-console | Vue 3 + TypeScript | `@hugo-ui/shadcn-vue` (Tailwind) | Pinia + TanStack Vue Query | GraphQL + REST |
| hugo-entitlement-importer-desktop | Electron + Vue 3 | `@hugo-ui/shadcn-vue` (Tailwind) | Pinia | REST |
