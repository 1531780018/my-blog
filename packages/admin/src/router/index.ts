import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import("@/views/Index/index.vue"),
    children: [
      {
        path: '/admin/editPost',
        name: "editPost",
        component: () => import("@/views/Post/postEdit.vue"),
      },
      {
        path: '/admin/postManage',
        name: "postManage",
        component: () => import("@/views/Post/postManage.vue"),
      },
      {
        path: '/admin/cateManage',
        name: "cateManage",
        component: () => import("@/views/classify/index.vue"),
      }
    ]
  },
  {
    path: '/',
    name: "index",
    component: () => import("@/views/Main/index.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem('token')
  if (!token && to.path !== '/') {
    next('/')
  } else {
    next()
  }
})

export default router
