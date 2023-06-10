module.exports = {
  title: 'vuePress',
  description: 'VuePress GitHub Actions',
  base: '/selfBlog/',
  repo: 'https://programmermao-001.github.io/selfBlog/',
  plugins: [
	'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '首页'],
	  {
        title: '测试1',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/test1/test1-1.md', 'test1-1'],
          ['/test1/test1-2.md', 'test1-2'],
        ]
      },
      {
        title: '测试2',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/test2/test2-1.md', 'test2-1'],
          ['/test2/test2-2.md', 'test2-2'],
        ]
      },
    ],
    nav: [
      {text: '首页', link: '/' },
      {text: 'v2', link: '/test2/test2-1.md'}
	  // {text: 'Test1', link: '/demo/test.md' }
    ]
  }
}
