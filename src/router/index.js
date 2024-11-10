import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'PopularRankings',
          component: () => import('@/views/PopularRankings.vue'),
        },
        {
          path: '/:name',
          name: 'Boutique',
          component: () => import('@/views/BoutiqueRecommendation.vue'),
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/ShopCart.vue'),
    },
  ],
})

export default router
