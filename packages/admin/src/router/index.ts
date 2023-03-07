import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import("@/views/Index/index.vue"),
    children: [
      {
        path: '/editPost',
        component: () => import("@/views/Post/postEdit.vue"),
      },
      {
        path: '/postManage',
        component: () => import("@/views/Post/postManage.vue"),
      }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
