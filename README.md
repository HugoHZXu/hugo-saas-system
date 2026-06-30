English | [简体中文](README.zh-CN.md)

# Hugo SaaS System

A complete B2B SaaS product suite portfolio covering backend services, a cross-framework design system, web consoles, a desktop tool, and dev tooling. Runs locally with synthetic demo data — zero external dependencies.

## Projects

### Product Suite

| Project | Tech Stack | Description | Repository |
|------|--------|------|------|
| hugo-saas-backend | NestJS · Koa · GraphQL · Prisma · SQLite · pnpm monorepo | Multi-service local backend: Identity Service, Admin BFF, Entitlement Service | [GitHub](https://github.com/HugoHZXu/hugo-saas-backend) |
| hugo-ui | React · Vue 3 · TypeScript · Tailwind · MUI · Storybook · Changesets | Cross-framework design system (MUI React / shadcn React / shadcn Vue) | [GitHub](https://github.com/HugoHZXu/hugo-ui) |
| hugo-saas-console | React · TypeScript · Module Federation · GraphQL · pnpm monorepo | SaaS admin dashboard with micro-frontend architecture; org and user management modules | [GitHub](https://github.com/HugoHZXu/hugo-saas-console) |
| hugo-entitlement-console | Vue 3 · TypeScript · Pinia · TanStack Query/Table · Tailwind · Playwright | Entitlement management console: product catalog, seat allocation, audit logs | [GitHub](https://github.com/HugoHZXu/hugo-entitlement-console) |
| hugo-entitlement-importer-desktop | Electron · Vue 3 · electron-vite · AntV G2 · Vitest | Desktop bulk entitlement importer: CSV validation, impact preview, result export | [GitHub](https://github.com/HugoHZXu/hugo-entitlement-importer-desktop) |

### Dev Tooling

| Project | Tech Stack | Description | Repository |
|------|--------|------|------|
| design-contract-mcp | TypeScript · MCP (Model Context Protocol) · Node.js | Contract-first Design-to-Code MCP Server that consumes hugo-ui AI Contracts for context building and React code validation | [GitHub](https://github.com/HugoHZXu/design-contract-mcp) |

## Architecture

```
hugo-entitlement-importer-desktop (Electron desktop)
         │
         ├── REST API ──► hugo-saas-backend ◄── GraphQL/REST ──┬── hugo-saas-console (React micro-frontend)
         │         ┌──────────┴──────────┐                     │
         │    @hugo-ui/shadcn-vue  @hugo-ui/mui                │
         │         │                     │                     │
         └─────────┴─────────────────────┴─────────────────────┘
                              hugo-ui (design system)
                                  ▲
                                  │ AI Contract (GitHub Release)
                                  │
                     design-contract-mcp (MCP Server: context + validation)
```

- All frontend projects share the [hugo-ui](https://github.com/HugoHZXu/hugo-ui) component library
- [hugo-saas-console](https://github.com/HugoHZXu/hugo-saas-console) uses React with `@hugo-ui/mui`
- [hugo-entitlement-console](https://github.com/HugoHZXu/hugo-entitlement-console) and the desktop tool use Vue 3 with `@hugo-ui/shadcn-vue`
- [design-contract-mcp](https://github.com/HugoHZXu/design-contract-mcp) consumes AI Contract artifacts published by hugo-ui via GitHub Releases, providing design system context and code validation for AI coding tools

## Local Development

Start projects independently in dependency order: backend first, then frontends. See each project's README for specific steps.

The documentation site is built with VitePress:
```bash
npm install
npm run docs:dev
```

## GitHub Pages Deployment

A `.github/workflows/deploy.yml` workflow is configured to automatically build and deploy the VitePress docs when pushing to `main`.

Before the first deployment, go to GitHub repository `Settings` → `Pages` and set `Build and deployment` → `Source` to `GitHub Actions`.

The workflow automatically sets the VitePress `base` based on the repository name in GitHub Actions. If the repository is `hugo-saas-system`, the default deployment URL is:

```text
https://<username>.github.io/hugo-saas-system/
```

For custom domains or special paths, set the `VITEPRESS_BASE` variable in `Settings` → `Secrets and variables` → `Actions` → `Variables` (use `/` for root domain deployment).
