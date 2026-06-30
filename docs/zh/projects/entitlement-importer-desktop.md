# hugo-entitlement-importer-desktop

桌面端授权批量导入工具，基于 Electron + Vue 3。

- **仓库**：[HugoHZXu/hugo-entitlement-importer-desktop](https://github.com/HugoHZXu/hugo-entitlement-importer-desktop)
- **技术栈**：Electron · Vue 3 · TypeScript · electron-vite · Pinia · vue-i18n · AntV G2 · Vitest · pnpm monorepo
- **UI 组件库**：`@hugo-ui/shadcn-vue`

## 导入流程

1. 使用身份账户登录，选择授权组织
2. 加载该组织可用的产品和授权
3. 上传 CSV — 本地解析
4. 本地校验：缺失邮箱、邮箱格式错误、无法识别的 action、重复邮箱、同一邮箱冲突 action
5. 创建后端导入任务，服务端校验：未注册邮箱、非组织成员、授权状态、Seat 限制影响
6. 在表格中查看合并结果，可编辑行、删除问题行、跳过警告
7. 独立图表窗口展示 Seat 占用影响（提交前预览）
8. 提交任务，轮询直到处理完成
9. 导出结果包（.zip），含 XLSX 摘要报告和成功/失败 CSV

## Monorepo 结构

```
packages/
├── web/       # Vue 渲染进程
├── electron/  # Electron 主进程 + preload
└── charts/    # G2 图表共享组件
```

图表在独立 Electron 窗口中打开，通过 IPC 通信。

## CSV 格式

| 列名 | 必填 | 说明 |
|---|---|---|
| `email` | 是 | 去空格小写，用于重复检测 |
| `name` | 否 | 去空格，透传后端 |
| `department` | 否 | 去空格，透传后端 |
| `action` | 否 | `assign`（默认）或 `revoke` |
