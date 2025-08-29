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
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-nodemailer'
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
