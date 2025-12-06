// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'THE HOUSE PROJECT',
      description: 'Crafted With Ownership',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: "/img/favicon.png" }]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ['thisisthehouse.com'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "@/assets/scss/base.scss" as *;',
        },
      },
    },
    plugins: [
      {
        name: 'disable-i18n-macros',
        enforce: 'pre',
        transform() {
          return null
        }
      }
    ]
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-nodemailer',
    '@nuxtjs/i18n'
  ],
  nodemailer: {
    from: '"Site Form" <info@thisisthehouse.com>',
    to: 'sales@thisisthehouse.com',
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: 'info@thisisthehouse.com',
      pass: '9Fvi41TQJK7t',
    },
  },
  i18n: {
    // 🌍 Языки
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'zh', iso: 'zh-Zh', name: 'Chinese', file: 'zh.json' }
    ],
    pages: {
      admin: false
    },
    defaultLocale: 'en',

    // 📁 Папка с переводами
    langDir: 'locales/',

    strategy: 'prefix_except_default',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      redirectOn: 'root', // перенаправление только с /
    },
    experimental: {
      disableVueI18nPlugins: true,
      functionInjection: false
    },
    macros: false,
    compilation: {
      strictMessage: false
    }
  },
  hooks: {
    'vite:extendConfig'(config, { isClient, isServer }) {
      if (!config.plugins) return
      config.plugins = config.plugins.filter(
        (p) =>
          !(p && p.name && p.name.includes('i18n')) &&
          !(p && p.name && p.name.includes('vue-i18n'))
      )
    }
  },
  nitro: {
    plugins: ["~/server/plugins/mongodb.ts"],
  },
  runtimeConfig: {
    ///mode
    mode: process.env.MODE,
    // mongodbUri
    mongodbUri: process.env.MONGO_URI,

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})
