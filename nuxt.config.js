const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Armand Jordaan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'google-site-verification',
        content: 'PtixMIx30-Y4kkcifCOaYBvia22uLFpNyFWet_4K6ZY'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://armandjordaan.com/'
      },
      {
        property: 'og:title',
        content: 'Armand Jordaan'
      },
      {
        property: 'og:description',
        content:
          'This is my portfolio site containing links to my work, blog, cv, and opinions'
      },
      {
        property: 'og:image',
        content: 'https://armandjordaan.com/metadata-image.PNG'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:url',
        content: 'https://armandjordaan.com/'
      },
      {
        property: 'twitter:title',
        content: 'Armand Jordaan'
      },
      {
        property: 'twitter:description',
        content:
          'This is my portfolio site containing links to my work, blog, cv, and opinions'
      },
      {
        property: 'twitter:image',
        content: 'https://armandjordaan.com/metadata-image.PNG'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap'
      },
      {
        rel: 'script',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-165928861-1'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-webfontloader'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#02040F',
          accent: '#FF021B',
          secondary: '#F2F4F3',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  css: ['~/assets/styles.css']
}
