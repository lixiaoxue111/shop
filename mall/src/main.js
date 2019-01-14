import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
//按需引用，
import { Tabbar, TabbarItem ,Swipe, SwipeItem ,Lazyload ,NavBar ,Icon ,Tab, Tabs ,Field ,Cell, CellGroup,
    Button,Toast,Row, Col,List,PullRefresh,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Card,SubmitBar} from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(NavBar).use(Icon).use(Tab)
    .use(Tabs).use(Field).use(Cell).use(CellGroup).use( Button).use(Toast).use(Row).use(Col).use(List)
    .use(PullRefresh).use(GoodsAction).use(GoodsActionBigBtn).use(GoodsActionMiniBtn).use(Card).use(SubmitBar);

import '@/mock/mock.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
