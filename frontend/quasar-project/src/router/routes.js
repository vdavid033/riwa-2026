const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'users', component: () => import('@/pages/UsersPage.vue') },
      { path: 'lokacija', component: () => import('@/pages/LokacijaPage.vue') },
      { path: 'test', component: () => import('@/pages/TestPage.vue') },
      { path: 'test2', component: () => import('@/pages/TestPage2.vue') },
      { path: 'testbrojac', component: () => import('@/pages/TestBrojacPage.vue') },
      { path: 'testzbroj', component: () => import('@/pages/TestZbrojPage.vue') },
      { path: 'testniz', component: () => import('@/pages/TestNizPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
