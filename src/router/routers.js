import HomeTest from '../views/Home.vue'
import Admin from '@/views/admin-page'
import HomePage from '@/views/home/home-page'

export default [
  {
    path: '/',
    component: Admin,
    children: [
      {
        path: '/home',
        component: HomePage
      },
      {
        path: '/home-test',
        component: HomeTest
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/404.vue')
  }
]
