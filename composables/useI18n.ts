export const useI18n = () => {
  const { $i18n } = useNuxtApp()

  return {
    locale: $i18n.locale,
    t: $i18n.t
  }
}
