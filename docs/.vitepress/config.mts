import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').at(-1) ?? 'hugo-saas-system'
const githubPagesBase = repositoryName.endsWith('.github.io') ? '/' : `/${repositoryName}/`
const configuredBase = process.env.VITEPRESS_BASE?.trim()
const base = configuredBase || (process.env.GITHUB_ACTIONS === 'true' ? githubPagesBase : '/')

const githubLinks = [
  { text: 'hugo-saas-backend', link: 'https://github.com/HugoHZXu/hugo-saas-backend' },
  { text: 'hugo-ui', link: 'https://github.com/HugoHZXu/hugo-ui' },
  { text: 'hugo-saas-console', link: 'https://github.com/HugoHZXu/hugo-saas-console' },
  { text: 'hugo-entitlement-console', link: 'https://github.com/HugoHZXu/hugo-entitlement-console' },
  { text: 'hugo-entitlement-importer-desktop', link: 'https://github.com/HugoHZXu/hugo-entitlement-importer-desktop' },
  { text: 'design-contract-mcp', link: 'https://github.com/HugoHZXu/design-contract-mcp' },
]

const enNav = [
  { text: 'Home', link: '/' },
  { text: 'Architecture', link: '/architecture/overview' },
  { text: 'Projects', link: '/projects/' },
  { text: 'GitHub', items: githubLinks }
]

const zhNav = [
  { text: '首页', link: '/zh/' },
  { text: '架构', link: '/zh/architecture/overview' },
  { text: '项目矩阵', link: '/zh/projects/' },
  { text: 'GitHub', items: githubLinks }
]

const enProjectsSidebar = [
  {
    text: 'Projects',
    items: [
      { text: 'Overview', link: '/projects/' },
    ]
  },
  {
    text: 'Backend',
    items: [
      { text: 'hugo-saas-backend', link: '/projects/saas-backend' },
    ]
  },
  {
    text: 'Design System',
    items: [
      { text: 'hugo-ui', link: '/projects/ui' },
    ]
  },
  {
    text: 'Web Consoles',
    items: [
      { text: 'hugo-saas-console', link: '/projects/saas-console' },
      { text: 'hugo-entitlement-console', link: '/projects/entitlement-console' },
    ]
  },
  {
    text: 'Desktop',
    items: [
      { text: 'hugo-entitlement-importer-desktop', link: '/projects/entitlement-importer-desktop' },
    ]
  },
  {
    text: 'Dev Tooling',
    items: [
      { text: 'design-contract-mcp', link: '/projects/design-contract-mcp' },
    ]
  }
]

const zhProjectsSidebar = [
  {
    text: '项目矩阵',
    items: [
      { text: '项目总览', link: '/zh/projects/' },
    ]
  },
  {
    text: '后端',
    items: [
      { text: 'hugo-saas-backend', link: '/zh/projects/saas-backend' },
    ]
  },
  {
    text: '设计系统',
    items: [
      { text: 'hugo-ui', link: '/zh/projects/ui' },
    ]
  },
  {
    text: 'Web 控制台',
    items: [
      { text: 'hugo-saas-console', link: '/zh/projects/saas-console' },
      { text: 'hugo-entitlement-console', link: '/zh/projects/entitlement-console' },
    ]
  },
  {
    text: '桌面端',
    items: [
      { text: 'hugo-entitlement-importer-desktop', link: '/zh/projects/entitlement-importer-desktop' },
    ]
  },
  {
    text: '工程工具',
    items: [
      { text: 'design-contract-mcp', link: '/zh/projects/design-contract-mcp' },
    ]
  }
]

export default withMermaid(defineConfig({
  title: 'Hugo SaaS System',
  description: 'B2B SaaS Product Suite Portfolio',
  lang: 'en-US',
  base,

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: enNav,
        sidebar: {
          '/architecture/': [
            {
              text: 'Architecture',
              items: [
                { text: 'Overview', link: '/architecture/overview' },
              ]
            }
          ],
          '/projects/': enProjectsSidebar,
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        lastUpdated: {
          text: 'Last updated at',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        footer: {
          message: 'Hugo SaaS System — B2B SaaS Product Suite',
        },
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: zhNav,
        sidebar: {
          '/zh/architecture/': [
            {
              text: '架构设计',
              items: [
                { text: '架构概览', link: '/zh/architecture/overview' },
              ]
            }
          ],
          '/zh/projects/': zhProjectsSidebar,
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        footer: {
          message: 'Hugo SaaS System - 企业级多租户SaaS产品体系',
        },
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HugoHZXu' }
    ],

    outline: {
      level: [2, 3]
    },

    search: {
      provider: 'local'
    }
  }
}))
