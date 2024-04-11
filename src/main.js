import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMq from 'vue-mq'
import swc from 'svg-web-component'
import vc from '@vue/composition-api'

import Discover from './components/Discover.vue'
import Search from './components/Search.vue'
import Page404 from '@/components/Page404'
import Likes from './components/Likes.vue'
;[Discover, Search, Page404, Likes].forEach(c => {
  Vue.component(c['name'], c)
})

Vue.use(vc)
swc.load(require('./icons'))
import './app.scss'

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1200,
    lg: Infinity
  }
})

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
