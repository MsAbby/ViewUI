import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: (resolve) => require(['@/page/home/index.vue'], resolve)
    },
    {
      path: '/panel',
      component: (resolve) => require(['@/page/panel/index.vue'], resolve)
    },
    {
    path: '/card',
    component: (resolve) => require(['@/page/card/index.vue'], resolve)
    }
  ]
})
export default router