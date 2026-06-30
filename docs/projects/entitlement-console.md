# hugo-entitlement-console

B2B product entitlement management console built with Vue 3.

- **Repository**: [HugoHZXu/hugo-entitlement-console](https://github.com/HugoHZXu/hugo-entitlement-console)
- **Tech Stack**: Vue 3 · TypeScript · Vite · Vue Router · Pinia · TanStack Vue Query · TanStack Table · Tailwind CSS v4 · vue-i18n · Vitest · Playwright
- **UI Library**: `@hugo-ui/shadcn-vue`

## Features

- **Product Catalog** — Browse products with status, provider, platform, usage dimensions, and entitlement metadata
- **Account Switching** — Switch between demo accounts with different organizations and access scopes
- **Product Detail** — View entitlement summaries, seat availability, and product-scoped activity
- **Seat Allocation** — Manage named-user assignments with search, draft selection, and capacity validation
- **Activity Log** — Audit trail with pagination, search, sorting, and localized messages
- **i18n** — Full English and Chinese UI via vue-i18n

## Project Structure

```
src/
├── app/        # App entry, providers, global styles, i18n
├── routes/     # Vue Router configuration
├── layouts/    # App shell layout
├── pages/      # Page components
├── features/   # Feature modules (composables, components, stores)
└── shared/     # Shared API, config, types, utilities
```
