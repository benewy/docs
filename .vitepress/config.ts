import { defineConfig } from 'vitepress'
import { description, font, github, name, releases} from './meta'

const version = '0.0.2'

export default defineConfig({
  base:'/docs/',
  lang: 'zh-CN',
  title: name,
  description,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:title', content: name }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { name: 'twitter:title', content: name }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/benewy/docs/tree/main/docs/:path',
      text: '为此页提供修改建议',
    },
    socialLinks: [
      { icon: 'github', link: github },
    ],
    footer: {
      message: 'Released under the GNU Lesser General Public License.',
      copyright: 'Copyright © 2022-PRESENT 杭州融惠数据科技有限公司',
    },
    nav: [
      { text: '指引', link: '/guide/' },
      { text: '前端', link: '/web/' },
      { text: '前端组件', link: '/components/form' },
      { text: '后端', link: '/app/' },
      { text: '后端工具', link: '/utils/' },
      { text: '常见问题', link: '/faq/' },
      {
        text: `v${version}`,
        items: [
          {
            text: '版本发布',
            link: releases,
          },
        ],
      },
    ],
    sidebar: {
      '/':[
        {
          text:'指引',
          items:[
            {
              text:'为什么会有这个项目？',
              link:'/guide/why'
            },
            {
              text:'开始',
              link:'/guide/'
            },
            {
              text:'特点',
              link:'/guide/features'
            },
          ]
        },
        {
          text:'前端',
          items:[
            {
              text: '前端介绍',
              link: '/web/'
            },
            {
              text: 'npm script',
              link: '/web/npm-script'
            },
            {
              text: '目录说明',
              link: '/web/folder'
            },
            {
              text: '项目配置项',
              link: '/web/settings'
            },
            {
              text: '路由',
              link: '/web/router'
            },
            {
              text: '联调',
              link: '/web/ajax'
            },
            {
              text: '组件注册',
              link: '/web/component'
            },
            {
              text: '样式',
              link: '/web/design'
            },
            {
              text: '引入外部模块',
              link: '/web/lib'
            },
            {
              text: '构建&部署',
              link: '/web/deploy'
            },
          ]
        },
        {
          text: '前端组件',
          items:[
            {
              text: '表单',
              link: '/components/form',
            },
            {
              text: '表格',
              link: '/components/table',
            },
            {
              text: '图片上传',
              link: '/components/upload',
            },
            {
              text: '滑块验证码',
              link: '/components/market-captcha',
            },
            {
              text: '弹窗',
              link: '/components/modal',
            }
          ]
        },
        {
          text:'后端',
          items:[
            {
              text: '后端介绍',
              link: '/app/'
            },
            {
              text: '目录说明',
              link: '/app/folder'
            },
            {
              text: '环境配置',
              link: '/app/settings'
            },
            {
              text: 'Xss配置',
              link: '/app/security'
            },
            {
              text: '权限配置',
              link: '/app/role'
            },
            {
              text: '构建&部署',
              link: '/app/deploy'
            }
          ]
        },
        {
          text: '后端工具',
          items: [
            {
              text: '工具介绍',
              link: '/utils/'
            },
            {
              text: '全局工具',
              items: [
                {
                  text: 'dd 政务钉钉',
                  link: '/utils/zwdd'
                },
                {
                  text: 'file 文件操作',
                  link: '/utils/file'
                },
                {
                  text: 'IRS 信用档案',
                  link: '/utils/irs'
                },
                {
                  text: 'login_user 登录用户',
                  link: '/utils/login_user'
                },
                {
                  text: 'office 文档',
                  link: '/utils/office'
                },
                {
                  text: 'page 分页',
                  link: '/utils/page'
                },
                {
                  text: 'string_to_list 类型转换',
                  link: '/utils/string_to_list'
                },
                {
                  text: 'sys_files 系统文件',
                  link: '/utils/sys_files'
                },
                {
                  text: 'app 应用系统',
                  link: '/utils/app'
                },
                {
                  text: 'class 类',
                  link: '/utils/class'
                },
                {
                  text: 'code2D 二维码',
                  link: '/utils/code2D'
                },
                {
                  text: 'enum 枚举',
                  link: '/utils/enum'
                },
                {
                  text: 'IP',
                  link: '/utils/ip'
                },
                {
                  text: 'redis 缓存',
                  link: '/utils/redis'
                },
                {
                  text: 'context 上下文',
                  link: '/utils/context'
                },
              ]
            },
            {
              text: '常用工具',
              items: [
                {
                  text: 'sys_agency 部门',
                  link: '/utils/sys_agency'
                },
                {
                  text: 'sys_agency_user 部门用户',
                  link: '/utils/sys_agency_user'
                },
                {
                  text: 'sys_area 行政区域',
                  link: '/utils/sys_area'
                },
                {
                  text: 'sys_files_service 文件操作',
                  link: '/utils/sys_files_service'
                },
                {
                  text: 'sys_filter_unit 单位筛选',
                  link: '/utils/sys_filter_unit'
                },
                {
                  text: 'sys_filter_user 用户筛选',
                  link: '/utils/sys_filter_user'
                },
                {
                  text: 'sys_message 消息',
                  link: '/utils/sys_message'
                },
                {
                  text: 'sys_role 角色',
                  link: '/utils/sys_role'
                },
                {
                  text: 'sys_tag 标签',
                  link: '/utils/sys_tag'
                },
                {
                  text: 'sys_unit 单位',
                  link: '/utils/sys_unit'
                },
                {
                  text: 'sys_user 用户资源',
                  link: '/utils/sys_user'
                },
                {
                  text: 'login 登录资源',
                  link: '/utils/login'
                },
              ]
            },
            {
              text: 'Admin 后台工具',
              items: [
                {
                  text: 'sys_filter_unit 单位筛选',
                  link: 'admin/sys_filter_unit'
                },
                {
                  text: 'sys_filter_user 用户筛选',
                  link: 'admin/sys_filter_user'
                },
                {
                  text: 'sys_menu 菜单',
                  link: 'admin/sys_menu'
                },
                {
                  text: 'sys_role 角色',
                  link: 'admin/sys_role'
                },
                {
                  text: 'sys_tag 标签',
                  link: 'admin/sys_tag'
                },
                {
                  text: 'sys_tagMap 标签关联',
                  link: 'admin/sys_tagMap'
                },
                {
                  text: 'sys_unit 单位',
                  link: 'admin/sys_unit'
                },
                {
                  text: 'sys_user 用户',
                  link: 'admin/sys_user'
                }
              ]
            }
          ]
        },
        {
          text:'常见问题',
          items:[
            {
              text: '前端常见问题',
              link: '/faq/#前端常见问题'
            },
            {
              text: '后端常见问题',
              link: '/faq/#后端常见问题'
            }
          ]
        }
      ]
    }
  },
})
