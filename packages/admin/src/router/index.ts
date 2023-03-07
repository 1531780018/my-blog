import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/admin',
    component: () => import("@/views/Index/index.vue"),
    children: [
      {
        path: '/admin/editPost',
        component: () => import("@/views/Post/postEdit.vue"),
      },
      {
        path: '/admin/postManage',
        component: () => import("@/views/Post/postManage.vue"),
      }
    ]
  },
  {
    path: '/',
    component: () => import("@/views/Main/index.vue"),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
