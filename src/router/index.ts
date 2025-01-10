import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/fullsearch',
      name: 'fullsearch',
      component: () => import('../views/FullSearch.vue'),
    },
    {
      path: '/influencerid/:id',
      name: 'influencerid',
      component: () => import('../views/InfluencerId.vue'),
    }
  ],
})

export default router
