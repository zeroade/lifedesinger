import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./frames/Basic.vue'),
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('./views/Login.vue'),
        },
        {
          path: 'designer',
          name: 'designer',
          component: () => import('./views/Designer/_index.vue'),
        },
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/Home/_index.vue'),
        },
        {
          path: 'senior',
          name: 'senior',
          component: () => import('./views/Senior/_index.vue'),
        },
        {
          path: '*',
          name: 'Home',
          component: () => import('./views/Home/_index.vue'),
        },
      ]
    },
  ]
})
