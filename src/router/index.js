import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index', // 直接重定向到 /index，避免与 component 冲突
  },
  {
    path: '/',
    component: () => import('../views/HomeView.vue'), // 懒加载根组件
    children: [
      // 首页
      { path: 'index', component: () => import('../views/home/IndexView.vue') },
      // 文化体验
      { path: 'cultural_experience', component: () => import('../views/home/CulturalExperience.vue') },
      // 旅游指南
      { path: 'travel_guide', component: () => import('../views/home/TravelGuide.vue') },
      // 关于我们
      { path: 'about_us', component: () => import('../views/home/AboutUs.vue') },
      // 联系我们
      { path: 'connect_us', component: () => import('../views/home/Connect.vue') },
    ],
  },
  // 示例：管理端路由（如需启用）
  // {
  //   path: '/admin',
  //   component: () => import('../views/admin/AdminView.vue'),
  //   redirect: '/admin/user',
  //   children: [
  //     // 管理端子路由
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(), // 移除 process.env.BASE_URL 或确保其正确配置
  routes,
})

export default router