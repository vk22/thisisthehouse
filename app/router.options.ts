export default {
  routes: (_routes: any) => [
    {
      name: 'index',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'lang',
      path: '/:lang',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'lang-page',
      path: '/:lang/:page',
      component: (route: any) => import(`~/pages/${route.params.page}.vue`)
    }
  ]
}
