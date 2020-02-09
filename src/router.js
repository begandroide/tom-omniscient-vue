import Vue from 'vue'
import LayoutBlank from './views/LayoutBlank.vue'
import Layout from './views/Layout.vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta);


let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LayoutBlank,
      children: [
        {
          path:'',
          name: 'Login',
          component: () => import('./components/Login.vue'),
          meta: {
            auth: false,
          },
        }
      ],
    },{
      path: '/',
      component: Layout,
      children: [
        {
          name: 'Home',
          path:'',
          component: () => import('./components/Home.vue'),
          meta: {
            auth: false,
          },
        },
      ],
    },
  ]
});

export default router;