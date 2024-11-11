import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'

let base = '/fs-admin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/`,
      name: 'home',
      component: HomeView,
      redirect: base,
      children: [
        {
          path: base,
          name: 'PopularRankings',
          component: () => import('@/views/PopularRankings.vue'),
        },
        {
          path: `${base}/:name`,
          name: 'Boutique',
          component: () => import('@/views/BoutiqueRecommendation.vue'),
        },
      ],
    },
    {
      path: `${base}/cart`,
      name: 'cart',
      component: () => import('@/views/ShopCart.vue'),
    },
    {
      path: `${base}/WaterfallChart`,
      name: 'WaterfallChart',
      component: () => import('@/views/waterfall-chart.vue'),
    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting 路由级代码拆分
      // this generates a separate chunk (About.[hash].js) for this route 路由级代码拆分
      // which is lazy-loaded when the route is visited.会在路由被访问时被 "懒加载"。
      component: () => import('../views/AboutView.vue')
    } */
  ],
})

export default router
