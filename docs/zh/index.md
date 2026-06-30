---
layout: home

hero:
  name: "Hugo SaaS System"
  text: "B2B SaaS 产品体系"
  tagline: 后端服务 · 设计系统 · Web控制台 · 桌面工具 · MCP 工程工具链
  actions:
    - theme: brand
      text: 查看项目
      link: /projects/
    - theme: alt
      text: GitHub
      link: https://github.com/HugoHZXu

features:
  - icon: ⚙️
    title: 多服务后端
    details: NestJS + Koa 微服务架构，Prisma + SQLite，GraphQL BFF，本地即可运行。
    link: /zh/projects/saas-backend
  - icon: 🎨
    title: 跨框架设计系统
    details: 同时支持 React（MUI / shadcn）和 Vue 3（shadcn-vue），Storybook 驱动，Changesets 版本管理。
    link: /zh/projects/ui
  - icon: 🖥️
    title: React 微前端控制台
    details: Module Federation 架构，Host + Remote 独立部署，组织管理与用户管理模块。
    link: /zh/projects/saas-console
  - icon: 🔑
    title: Vue 授权管理控制台
    details: 产品目录、Seat 分配、审计日志，Pinia + TanStack Query + Playwright E2E。
    link: /zh/projects/entitlement-console
  - icon: 💻
    title: Electron 桌面工具
    details: 授权批量导入，CSV 校验、影响预览、图表分析、结果导出。
    link: /zh/projects/entitlement-importer-desktop
  - icon: 🤖
    title: Figma-to-Code MCP Server
    details: "AI 编码工具的 MCP 扩展：通过 Contract-first 方式将 Figma 设计稿转化为 React 代码，提供设计上下文与代码校验。"
    link: /zh/projects/design-contract-mcp
---
