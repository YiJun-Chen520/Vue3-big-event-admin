import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/manage',
      children: [
        {
          path: '/manage',
          component: () => import('@/views/article/ArticleManage.vue'),
        },
        {
          path: '/channel',
          component: () => import('@/views/article/ArticleChannel.vue'),
        },
        {
          path: '/profile',
          component: () => import('@/views/user/UserProfile.vue'),
        },
        {
          path: '/avatar',
          component: () => import('@/views/user/UserAvatar.vue'),
        },
        {
          path: '/password',
          component: () => import('@/views/user/UserPassword.vue'),
        },
      ],
    },
  ],
})

// 路由导航守卫
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
  return true
})

export default router
