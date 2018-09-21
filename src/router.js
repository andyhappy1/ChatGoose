import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/StartedViews/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/team',
      name: 'team',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/StartedViews/Team.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('./views/StartedViews/Blog.vue')
    },
      {
          path: '/auth/login',
          name: 'login',
          component: () => import('./views/StartedViews/Auth.vue')
      },
      {
          path: '/auth/register',
          name: 'register',
          component: () => import('./views/StartedViews/Auth.vue')
      },
      {
          path: '/auth/resetpassword',
          name: 'resetPassword',
          component: () => import('./views/StartedViews/Auth.vue')
      },
    {
        path: '/product',
        name: 'product',
        component: () => import('./views/StartedViews/Product.vue')
    },
      {
          path: '/dashboard',
          name: 'dashboard',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/DashboardViews/DashboardTabs/Dashboard.vue')
      },
      {
          path: 'dashboard/editor/',
          name: 'botEditor',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/DashboardViews/DashboardTabs/BotEditor.vue')
      },
      {
          path: 'dashboard/analytics/',
          name: 'analytics',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/DashboardViews/DashboardTabs/Analytics.vue')
      },
      {
          path: 'dashboard/buy/',
          name: 'buy',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/DashboardViews/DashboardTabs/Buy.vue')
      },
      {
          path: 'dashboard/admin/',
          name: 'admin',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/DashboardViews/DashboardTabs/Admin.vue')
      },
      {
          path: 'dashboard/setup/company',
          name: 'setupCompany',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/DashboardViews/SubTabs/SetupCompany.vue')
      }
  ]
})
