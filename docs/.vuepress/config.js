module.exports = {
  plugins: ['@vuepress/pwa'],
  base: '/vue-simple-icons/',
  themeConfig: {
    repo: 'sh7dm/vue-simple-icons',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        repoLabel: 'Contribute!',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          '/',
          '/API',
          '/usage'
        ],
      },
      '/ru/': {
        selectText: 'Язык',
        label: 'Русский',
        repoLabel: 'GitHub',
        editLinkText: 'Редактировать эту сраницу на GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Доступна новая информация.",
            buttonText: "Обновить"
          }
        },
        sidebar: [
          '/ru/',
          '/ru/API',
          '/ru/usage'
        ],
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-simple-icons',
      description: 'Simple Icons for Vue.js'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'vue-simple-icons',
      description: 'Simple Icons for Vue.js'
    }
  }
}