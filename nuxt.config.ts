// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'The House Project',
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
