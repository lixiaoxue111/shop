import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import { Tabbar, TabbarItem ,Swipe, SwipeItem ,Lazyload ,NavBar ,Icon } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(NavBar).use(Icon);

import '@/mock/mock.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
