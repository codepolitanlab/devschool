import webpack from 'webpack'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devschool',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:local', property: 'og:local', content: 'id_ID' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:site', property: 'og:site', content: 'CodePolitan.com' },
      { hid: 'article:publisher', property: 'article:publisher', content: 'https://www.instagram.com/codepolitan' },
      { hid: 'og:image:width', property: 'og:image:width', content: '700' },
      { hid: 'og:image:height', property: 'og:image:height', content: '350' },
      { property: 'language', content: 'Indonesia' },
      { property: 'revisit-after', content: '7' },
      { property: 'webcrawlers', content: 'all' },
      { property: 'rating', content: 'general' },
      { property: 'spiders', content: 'all' },
      { property: 'robots', content: 'all' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/assets/css/stack-interface.css',
    '~/assets/css/theme-serpent.css',
    '~/assets/css/iconsmind.css',
    '~/assets/css/socicon.css',
    '~/assets/css/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/bootstrap.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  bootstrapVue: {
    icons: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  }
}
