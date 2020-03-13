
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Анкета | Zigmund.Online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Оставьте заявку и начните заниматься с проверенным психологом онлайн. Два первых занятия в Skype по цене одного — за 2490₽. Попробуйте и почувствуйте результат.' 
      }, {
        name: 'image',
        content: './assets/images/ZigmundOnline.jpg'
      }, {
        name: 'og:title',
        content: 'Анкета | Zigmund.Online'
      }, {
        name: 'og:description',
        content: 'Оставьте заявку и начните заниматься с проверенным психологом онлайн. Два первых занятия в Skype по цене одного — за 2490₽. Попробуйте и почувствуйте результат.'
      }, {
        name: 'og:image',
        content: './assets/images/ZigmundOnline.jpg'
      }, {
        name: 'og:image:secure_url',
        content: './assets/images/ZigmundOnline.jpg'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
