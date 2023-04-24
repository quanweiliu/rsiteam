import defineBlogConfig from "./src/declare/defineBlogConfig";

const site = `https://qingxia-ela.github.io`
// const base = `/Shiina-Astro-Blog`

export default defineBlogConfig({
  PageDefaultSettings: {
    background: {
      type: 'fade',
      content: `linear-gradient(to left, #12c2e9, #c471ed, #f64f59)`,
    },
    footer: {
      content: [
        '<div>Copyright © 2022 - 2023 Dongyanni</div>',
        '<div>Powered by Astro & Vue</div>',
        '<div>鄂ICP备2023002894号</div>',
        // '<a href="https://github.com/QingXia-Ela/Shiina-Astro-Blog/" target="_blank">Github Link</a>',
      ]
    }
  },
  UserInfo: {
    name: 'Shiinafan',
    introduction: '有钱终成眷属，没钱亲眼目睹',
    // E:\rsit\rsiteam\public\people\teacher01.jpg
    avatar: '/people/teacher01.jpg',
    link: [
      {
        sitename: 'Github',
        link: 'https://github.com/QingXia-Ela',
        class: 'iconfont icon-github'
      }
    ]
  },
  // blog 界面
  WebsiteSettings: {
    title: `Remote Sensing Intelligent interpretation Team (RSIT)`,
    description: `董燕妮的科研小组`,
    site,
    useIndex: false,
  },
  SearchConfig: {
    active: true,
    mode: 'static',
  },
  pages: {
    'friends': {
      FriendList: []
    },
    index: {
      header: {
        hidden: false
      },
      background: {
        type: "photo",
        content: "/indexBG.jpg",
        useMaskOnDarkMode: true
      },
      footer: {
        hidden: true
      },
      setMinHeight: "fill"
    },
    blog: {
      PageArticleCount: 5
    },
  }
})