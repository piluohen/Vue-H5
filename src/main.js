// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Mint from 'mint-ui'

// 引入mint-ui样式
import 'mint-ui/lib/style.css'
import 'assets/css/common.css'
import 'assets/css/swiper.min.css'

import App from './App'
import router from './router'
import store from './store'

// 引入filters
import filter from 'service/filters'

import LazyLoad from 'service/lazyload'


Vue.use(LazyLoad)
Vue.use(Mint)
Vue.use(Vuex)
Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  filter,
  template: '<App/>',
  components: { App }
})
