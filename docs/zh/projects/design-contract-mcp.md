# design-contract-mcp

Contract-first Design-to-Code 架构演示，基于 MCP（Model Context Protocol）的 AI 设计转代码服务。消费 `hugo-ui` 通过 GitHub Releases 发布的 AI Contract 产物，完成设计数据接入 → 组件映射 → 上下文构建 → React 代码校验的完整链路。

- **仓库**：[HugoHZXu/design-contract-mcp](https://github.com/HugoHZXu/design-contract-mcp)
- **技术栈**：TypeScript · Node.js · MCP (Model Context Protocol) · tsx

> ⚠️ 架构 Demo 项目，非生产级 Figma-to-Code 工具。展示 AI 工具如何消费版本化设计系统 Contract 产物、结合设计数据与映射元数据构建生成上下文，并校验生成的 React 代码。

## 核心链路

1. **Normalize** — 将 Figma MCP 工具输出归一化为紧凑的本地设计 fixture
2. **Resolve** — 从 `code-connect/manifest.json` 解析节点到组件的映射
3. **Load** — 从已校验的 `@hugo-ui/mui` Contract 产物加载组件 Contract 和 Token 策略
4. **Build** — 构建上下文包（context pack），组合设计数据、映射元数据、Contract、Token、模式规则、预期组件用法
5. **Validate** — 校验生成的 React 代码：import 包、允许 props、禁止 props、映射组件覆盖率、原始颜色字面量
6. **Return** — 返回结构化校验报告，供 MCP 客户端或下游应用消费

## MCP Server 传输模式

| 模式 | 启动命令 | 默认端口 |
|---|---|---|
| stdio | `npm run mcp:server` | 进程间通信 |
| Streamable HTTP | `npm run mcp:https` | `127.0.0.1:3000` |
| Node HTTPS (直连 TLS) | `npm run mcp:https` | `127.0.0.1:3443` |

## 暴露的 MCP Tools

- `get_design_context(frameId)` — 获取设计上下文
- `get_code_connect_map(nodeId)` — 获取 Code Connect 映射
- `get_component_contract(componentName, contractVersion?)` — 获取组件 Contract
- `build_generation_context(frameId, contractVersion?)` — 构建生成上下文包
- `validate_generated_code(code, expectedComponentUsage, contractVersion?)` — 校验生成代码
- `get_contract_status()` — 获取 Contract 状态

## 校验范围

- 映射组件是否从 Contract 指定的包 import
- JSX props 是否均在组件 Contract 的允许列表中
- 禁止使用的 props
- 生成 JSX 是否覆盖了上下文包中所有预期的映射组件
- 原始颜色字面量（如 `#FF0000`、`rgb(...)`、`hsl(...)`）

## 项目结构

```
mcp-server/       MCP Server 核心（stdio/HTTP/HTTPS 入口、adapter、CLI、validator）
code-connect/     Contract 增强的节点到组件映射
fixtures/figma/   归一化的 Figma 设计数据
vendor/           可重现的 @hugo-ui/mui AI Contract 快照（fallback）
contracts/patterns/  页面级 pattern contract
scripts/          Figma fixture 归一化、Contract 同步/校验 CLI
generated/        静态示例、context pack、校验报告
```

## 与 hugo-ui 的关系

这是双仓库工作流的**消费端**：
- [hugo-ui](./ui) 拥有设计系统源码，通过 GitHub Releases 发布 `@hugo-ui/mui` AI Contract 产物
- design-contract-mcp 解析设计数据、映射到设计系统组件、构建上下文、校验 React 代码用法