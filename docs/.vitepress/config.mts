import { defineConfig } from 'vitepress'
import { blogTheme } from './blog-theme'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'

function chineseSearchOptimize(input: string) {
  const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
  const result: string[] = []
  for (const it of segmenter.segment(input)) {
    if (it.isWordLike) {
      result.push(it.segment)
    }
  }
  return result.join(' ')
}


export default defineConfig({
    // sitemap: {
    //     hostname: 'https://your-blog.com'
    // },
    base: "/mumu-blog/",

    // 忽略死链，避免删文章后报错
    ignoreDeadLinks: true,

    // 继承博客主题配置
    extends: blogTheme,

    lang: 'zh-cn',
    title: 'mumu',
    description: '你的指尖，拥有改变世界的力量',
    lastUpdated: false,

    markdown: {
        lineNumbers: true,
    },

    vite: {
        plugins: [pagefindPlugin({
            customSearchQuery: chineseSearchOptimize,
            excludeSelector: ['img', 'a.header-anchor'],
        })],
        // 忽略编辑器临时文件
        server: {
            watch: {
                ignored: ['**/.~*'] // 关键！忽略 .~ 开头的临时文件
            }
        }
    },

    head: [
        // ['link', { rel: 'icon', href: '/assets/mumu.jpg' }], // 网站图标
        ['link',{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-web/style.css' }]  // 霞鹜文楷字体
    ],

    themeConfig: {
        // 目录显示 2~3 级标题
        outline: {
            level: [2, 3],
            label: 'Table of Contents'
        },

        // logo: '/assets/mumu.jpg',
        
        nav: [
            { text: 'Index', link: '/' },
            { text: 'Web', link: '/Web/' },
            { text: 'Intranet', link: '/Intranet/' },
            { text: 'Code', link: '/Code/' },
            { text: 'Tools', link: '/Tools/' },
            { text: 'VulnerabilityDatabase', link: '/VulnerabilityDatabase/' },
            { text: 'AI', link: '/AI/' },
            { text: 'Others', link: '/Others/' },
        ],

        // 社交链接
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/mumusrc/mumu-blog'
            },
        ],

        // 侧边栏
        sidebar: {

            "/Web/": [
                {
                    // text: 'SQL注入',
                    // collapsed: true,
                    // items: [
                // { text: 'SQL 注入', link: '/Web/web-sqli' },
                    // ]
                }
            ],

            "/Intranet/": [
                {
                    // text: 'SQL注入',
                    // collapsed: true,
                    // items: [
                    //     { text: 'SQLi-Labs通关思路总结', link: '/labs/sqli-labs' },
                    // ]
                }
            ],
            
            "/Code/": [
                {
                    // text: 'SQL注入',
                    // collapsed: true,
                    // items: [
                    //     { text: 'SQLi-Labs通关思路总结', link: '/labs/sqli-labs' },
                    // ]
                }
            ],

            "/Tools/": [
                {
                    // text: 'SQL注入',
                    // collapsed: true,
                    // items: [
                    //     { text: 'SQLi-Labs通关思路总结', link: '/labs/sqli-labs' },
                    // ]
                }
            ],

            "/VulnerabilityDatabase/": [
                {
                    // text: 'SQL注入',
                    // collapsed: true,
                    // items: [
                    //     { text: 'SQLi-Labs通关思路总结', link: '/labs/sqli-labs' },
                    // ]
                }
            ],

            "/AI/": [
                {
                    text: 'CLI',
                    collapsed: true,
                    items: [
                        { text: '初识 CC Switch', link: '/AI/getting_started_with_cc_switch' },
                        { text: '启动剖析之 Claude Code', link: '/AI/startup_analysis_of_claude_code' }
                    
                    ]
                }
            ],

            "/Others/": [
                {
                    // text: '环境构建',
                    // collapsed: true,
                    // items: [
                    //     { text: 'Docker', link: '/Others/docker' },
                    // ]
                }
            ],

        },
    },
})