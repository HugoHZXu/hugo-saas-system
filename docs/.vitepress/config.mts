import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').at(-1) ?? 'hugo-saas-system'
const githubPagesBase = repositoryName.endsWith('.github.io') ? '/' : `/${repositoryName}/`
const configuredBase = process.env.VITEPRESS_BASE?.trim()
const base = configuredBase || (process.env.GITHUB_ACTIONS === 'true' ? githubPagesBase : '/')

export default withMermaid(defineConfig({
  title: 'Hugo SaaS System',
  description: '企业级多租户SaaS产品体系',
  lang: 'zh-CN',
  base,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '架构', link: '/architecture/overview' },
      { text: '项目矩阵', link: '/projects/' },
      {
        text: 'GitHub',
        items: [
          { text: 'hugo-saas-backend', link: 'https://github.com/HugoHZXu/hugo-saas-backend' },
          { text: 'hugo-ui', link: 'https://github.com/HugoHZXu/hugo-ui' },
          { text: 'hugo-saas-console', link: 'https://github.com/HugoHZXu/hugo-saas-console' },
          { text: 'hugo-entitlement-console', link: 'https://github.com/HugoHZXu/hugo-entitlement-console' },
          { text: 'hugo-entitlement-importer-desktop', link: 'https://github.com/HugoHZXu/hugo-entitlement-importer-desktop' },
        ]
      }
    ],

    sidebar: {
      '/architecture/': [
        {
          text: '架构设计',
          items: [
            { text: '架构概览', link: '/architecture/overview' },
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目矩阵',
          items: [
            { text: '项目总览', link: '/projects/' },
          ]
        },
        {
          text: '后端',
          items: [
            { text: 'hugo-saas-backend', link: '/projects/saas-backend' },
          ]
        },
        {
          text: '设计系统',
          items: [
            { text: 'hugo-ui', link: '/projects/ui' },
          ]
        },
        {
          text: 'Web 控制台',
          items: [
            { text: 'hugo-saas-console', link: '/projects/saas-console' },
            { text: 'hugo-entitlement-console', link: '/projects/entitlement-console' },
          ]
        },
        {
          text: '桌面端',
          items: [
            { text: 'hugo-entitlement-importer-desktop', link: '/projects/entitlement-importer-desktop' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HugoHZXu' }
    ],

    footer: {
      message: 'Hugo SaaS System - 企业级多租户SaaS产品体系',
    },

    outline: {
      level: [2, 3]
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

    search: {
      provider: 'local'
    }
  }
}))
