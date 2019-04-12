import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
import Detail from './views/Detail.vue'
import FooterBar from './components/FooterBar.vue'
import Error from './views/Error.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      //component: Home
        components:{
          default:Home,
            'footer-bar':FooterBar
        },
       meta:{
       keepAlive:true;
    },
    {
      path: '/classify',
      name: 'classify',
      //component: Classify
        components:{
            default:Classify,
            'footer-bar':FooterBar
        },
      meta:{
     keepAlive:true;
    },
      {
          path: '/cart',
          name: 'cart',
          // component: Cart
          components:{
              default:Cart,
              'footer-bar':FooterBar
          }
      },
      {
          path: '/user',
          name: 'user',
           //component: User
          components:{
              default:User,
              'footer-bar':FooterBar
          },
         meta:{
         keepAlive:true;
      },
      {
          path:'/detail/:id',
          name:'detail',
          component:Detail
      },
      {
          path:'*',
          component:Error
      }
  ]
})
