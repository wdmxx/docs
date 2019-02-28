// .vuepress/config.js
module.exports = {
  base: '/docs/',
  title: '个人主页', 
  description: 'wdm',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },                      // 根路径
      { text: '首页',  link:'/testtest/'},
    ],
    sidebar: {
      '/testtest/':[
        '/testtest/head_test'
      ],
      //['/home2', 'home2自定义标题'],
      //'/home3',
      //'中文',
    }
  }

}