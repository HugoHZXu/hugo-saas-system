# hugo-ui

Standalone design system monorepo with React and Vue 3 component libraries, published as npm packages.

- **Repository**: [HugoHZXu/hugo-ui](https://github.com/HugoHZXu/hugo-ui)
- **Tech Stack**: React · Vue 3 · TypeScript · Tailwind CSS · MUI · Emotion · Storybook · Changesets · pnpm monorepo

## Packages

| Package | Description |
|---|---|
| `@hugo-ui/mui` | React components built with MUI + Emotion, with theming and i18n support |
| `@hugo-ui/shadcn` | React components using Tailwind CSS, shadcn-style patterns |
| `@hugo-ui/shadcn-vue` | Vue 3 components using Tailwind CSS, shadcn-vue conventions |
| `@hugo-ui/storybook` | React Storybook for demos and visual testing |
| `@hugo-ui/storybook-vue` | Vue Storybook for demos and visual testing |

## Live Demos

- React Storybook: [https://hugohzxu.github.io/hugo-ui/](https://hugohzxu.github.io/hugo-ui/)
- Vue Storybook: [https://hugohzxu.github.io/hugo-ui/vue/](https://hugohzxu.github.io/hugo-ui/vue/)

## Usage

```bash
# MUI + Emotion
npm install @hugo-ui/mui @mui/material @mui/icons-material @emotion/react @emotion/styled react react-dom react-intl

# shadcn React
npm install @hugo-ui/shadcn react react-dom
```

Versioning and releases are managed with Changesets, published to the `@hugo-ui` npm organization.
