export default defineNuxtPlugin(async (nuxtApp) => {
  let locale = 'en'
  const path = window.location.pathname
  if (path.startsWith('/zh')) locale = 'zh'

  const messages = await import(`~/locales/${locale}.json`).then(m => m.default)

  const t = (key: string) =>
    key.split('.').reduce((o, i) => o?.[i], messages) ?? key

  const tm = (key: string) => {
    const value = key.split('.').reduce((o, i) => o?.[i], messages)
    return value ?? key
  }

  nuxtApp.provide('i18n', { locale, messages, t, tm })

  nuxtApp.vueApp.config.globalProperties.$t = t
  nuxtApp.vueApp.config.globalProperties.t = t

  // 🔥 регистрируем $tm
  nuxtApp.vueApp.config.globalProperties.$tm = tm
  nuxtApp.vueApp.config.globalProperties.tm = tm
})
