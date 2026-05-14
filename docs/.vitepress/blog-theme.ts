// 主题独有配置
import type { Theme } from '@sugarat/theme'
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://github.com/mumusrc/mumu-blog'
const RSS: Theme.RSSOptions = {
   title: 'mumu\'s blog',
   baseUrl,
   copyright: 'Copyright (c) 2026, mumu',
   description: '你的指尖，拥有改变世界的力量',
}

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
    // 开启RSS支持
    RSS,

    authorList: [
        {
        nickname: 'mumu',
        url: 'https://github.com/mumusrc/mumu-blog',
        des: '你的指尖,拥有改变世界的力量'
        }
    ],


    // 页脚
    footer: {
        copyright: 'MIT License | mumu',
    },

    // 主题色修改
    themeColor: 'el-blue',

    // 文章默认作者
    author: 'mumu',

    // 友链
    friend: {
        title: 'Friend Links',
        random: true,
        // 限制列表只展示 3 个
        limit: 3,
        // 自定义滚动速度（可选）
        scrollSpeed: 2000,
        list: [
            {
                nickname: '国光',
                des: 'Never deter till tomorrow that which you can do today',
                avatar:
                    'https://html.sqlsec.com/hexo/avatar.png',
                url: 'https://www.sqlsec.com/'
            },
            {
                nickname: 'Wooyun Drops',
                des: '乌云漏洞库',
                avatar:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'http://drops.2xss.cc/#!/'
            },
            {
                nickname: '离别歌',
                des: 'phith0n大佬',
                avatar:
                    'https://www.leavesongs.com/static/cactus/images/logo.png',
                url: 'https://www.leavesongs.com/list/#'
            },
            {
                nickname: 'CTF Wiki',
                des: '一个强大的CTF知识库',
                avatar:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'https://ctf-wiki.org/'
            },
            {
                nickname: 'Vulnerability-Wiki',
                des: '漏洞不是终点，而是理解系统运行方式的一种窗口',
                avatar:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'https://www.vul-wiki.org/'
            },
            {
                nickname: '狼组安全团队公开知识库',
                des: '一个强大的网安知识库',
                avatar:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'https://wiki.wgpsec.org/'
            },
            {
                nickname: '安全KER',
                des: '一个很有意思的网安知识站',
                avatar:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'https://www.anquanke.com/'
            },
            {
                nickname: 'SQL注入WIKI',
                des: '一个专注于SQL注入的Wiki',
                avatar:
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                url: 'https://sqlwiki.radare.cn/#/'
            },
        ]
    },

    // 热门文章
    hotArticle: {
        title: 'Featured Articles',
        nextText: 'Another batch',
        pageSize: 9,
        empty: 'Nothing here yet ...'
    },

    // 推荐文章的展示卡片
    recommend: false,

    // 首页标签配置
    homeTags: {
        title: 'Tags',
        limit: 30,
        sort: 'desc',
        showCount: true

    },
})

export {blogTheme}
