# hugo-entitlement-console

B2B 产品授权管理控制台，基于 Vue 3。

- **仓库**：[HugoHZXu/hugo-entitlement-console](https://github.com/HugoHZXu/hugo-entitlement-console)
- **技术栈**：Vue 3 · TypeScript · Vite · Vue Router · Pinia · TanStack Vue Query · TanStack Table · Tailwind CSS v4 · vue-i18n · Vitest · Playwright
- **UI 组件库**：`@hugo-ui/shadcn-vue`

## 功能

- **产品目录** — 浏览产品，展示状态、供应商、平台、使用维度、授权元数据
- **账户切换** — 切换不同组织和权限范围的 Demo 账户
- **产品详情** — 查看授权摘要、Seat 可用情况、产品级活动记录
- **Seat 分配** — 指定用户分配，支持搜索、草稿选择、容量校验
- **活动日志** — 审计追踪，支持分页、搜索、排序、中英双语消息
- **i18n** — 完整中英文双语支持（vue-i18n）

## 项目结构

```
src/
├── app/        # 入口、providers、全局样式、i18n
├── routes/     # Vue Router 配置
├── layouts/    # 应用布局
├── pages/      # 页面组件
├── features/   # 功能模块（composables、components、stores）
└── shared/     # 共享 API、配置、types、工具
```
