export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '#1にち1コマちゃん',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#eef6fc' },
      { hid: 'theme-color', name: 'theme-color', content: '#eef6fc' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '#1日1コマちゃん、#1日4コマちゃん',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { hid: 'icon32', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { hid: 'icon16', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { hid: 'manifest', rel: 'manifest', href: '/site.webmanifest' },
      { hid: 'mask-icon', rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~layouts/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedstate.js', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-lazy-load',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    cache: true,
    hardSource: true,
  },

  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    timing: false,
  },
};
