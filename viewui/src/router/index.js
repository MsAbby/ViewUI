import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/card',
    component: (resolve) => require(['@/page/card/index.vue'], resolve)
  }
  ]
})
export default router