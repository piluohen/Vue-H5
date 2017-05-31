import Vue from 'vue'
import Router from 'vue-router'

// 引入路由视图

import home from 'views/home'
import hot from 'views/hotNews'
import global from 'views/globalNews'
import sole from 'views/sole'
import download from 'views/download'
import detail from 'views/newsDetails'

import page404 from 'views/page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      query: { code: '111' },
      name: 'home',
      component: home
    },
    {
      path: '/hot',
      name: 'hot',
      component: hot
    },
    {
      path: '/global',
      name: 'global',
      component: global
    },
    {
      path: '/sole',
      name: 'sole',
      component: sole
    },
    {
      path: '/download',
      name: 'download',
      component: download
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '*',
      component: page404
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})