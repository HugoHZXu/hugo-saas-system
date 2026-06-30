# design-contract-mcp

Contract-first Design-to-Code architecture demo — an MCP (Model Context Protocol) server for AI-powered design-to-code workflows. Consumes versioned `@hugo-ui/mui` AI Contract artifacts published via GitHub Releases from hugo-ui, walking through the full chain: design data ingestion → component mapping → context building → React code validation.

- **Repository**: [HugoHZXu/design-contract-mcp](https://github.com/HugoHZXu/design-contract-mcp)
- **Tech Stack**: TypeScript · Node.js · MCP (Model Context Protocol) · tsx

> ⚠️ This is an architecture demo, not a production Figma-to-code tool. It demonstrates how an AI tool can consume versioned design-system AI Contract artifacts, combine them with captured design data and mapping metadata, build generation context, and validate generated React code.

## Core Pipeline

1. **Normalize** — captured Figma MCP tool output into a compact local design fixture
2. **Resolve** — node-to-component mappings from `code-connect/manifest.json`
3. **Load** — component contracts and token policies from a verified `@hugo-ui/mui` contract artifact
4. **Build** — a context pack combining design data, mapping metadata, contracts, tokens, pattern rules, and expected component usage
5. **Validate** — generated React against import packages, allowed props, forbidden props, mapped component coverage, and raw color literals
6. **Return** — structured validation reports for consumption by an MCP client or downstream application

## MCP Server Transports

| Transport | Command | Default Port |
|---|---|---|
| stdio | `npm run mcp:server` | Inter-process |
| Streamable HTTP | `npm run mcp:http` | `127.0.0.1:3000` |
| Node HTTPS (direct TLS) | `npm run mcp:https` | `127.0.0.1:3443` |

## Exposed MCP Tools

- `get_design_context(frameId)` — get design context
- `get_code_connect_map(nodeId)` — get Code Connect mapping
- `get_component_contract(componentName, contractVersion?)` — get component contract
- `build_generation_context(frameId, contractVersion?)` — build generation context pack
- `validate_generated_code(code, expectedComponentUsage, contractVersion?)` — validate generated code
- `get_contract_status()` — get contract status

## Validation Scope

- Whether mapped components are imported from their contract-specified packages
- Whether all JSX props are listed in the adapted component contract
- Forbidden prop usage
- Whether generated JSX covers all expected mapped components from the context pack
- Raw color literals such as `#FF0000`, `rgb(...)`, or `hsl(...)`

## Project Structure

```
mcp-server/         MCP server core (stdio/HTTP/HTTPS entries, adapter, CLI, validator)
code-connect/       Contract-enriched node-to-component mapping
fixtures/figma/     Normalized Figma design data
vendor/             Reproducible @hugo-ui/mui AI contract fallback snapshot
contracts/patterns/ Page-level pattern contracts
scripts/            Figma fixture normalization, contract sync/verify CLI
generated/          Static samples, context pack, validation reports
```

## Relationship with hugo-ui

This is the **consumer side** of a two-repository workflow:
- [hugo-ui](./ui) owns the design-system source and publishes `@hugo-ui/mui` AI Contract artifacts through GitHub Releases
- design-contract-mcp resolves design data, maps design nodes to design-system components, builds context, and validates React code usage
