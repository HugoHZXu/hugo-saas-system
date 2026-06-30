# hugo-ui

独立设计系统 Monorepo，同时支持 React 和 Vue 3 组件库，通过 npm 包发布。

- **仓库**：[HugoHZXu/hugo-ui](https://github.com/HugoHZXu/hugo-ui)
- **技术栈**：React · Vue 3 · TypeScript · Tailwind CSS · MUI · Emotion · Storybook · Changesets · pnpm monorepo

## Packages

| 包 | 说明 |
|---|---|
| `@hugo-ui/mui` | React 组件，基于 MUI + Emotion，支持主题和 i18n |
| `@hugo-ui/shadcn` | React 组件，基于 Tailwind CSS，shadcn 风格 |
| `@hugo-ui/shadcn-vue` | Vue 3 组件，基于 Tailwind CSS，shadcn-vue 风格 |
| `@hugo-ui/storybook` | React Storybook 演示与可视化测试 |
| `@hugo-ui/storybook-vue` | Vue Storybook 演示与可视化测试 |

## Live Demos

- React Storybook：[https://hugohzxu.github.io/hugo-ui/](https://hugohzxu.github.io/hugo-ui/)
- Vue Storybook：[https://hugohzxu.github.io/hugo-ui/vue/](https://hugohzxu.github.io/hugo-ui/vue/)

## 使用方式

```bash
# MUI + Emotion
npm install @hugo-ui/mui @mui/material @mui/icons-material @emotion/react @emotion/styled react react-dom react-intl

# shadcn React
npm install @hugo-ui/shadcn react react-dom
```

版本管理通过 Changesets，发布到 npm `@hugo-ui` organization。
