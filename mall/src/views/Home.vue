<template>
  <!--头部-->
  <div class="container">
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left"></van-icon>
      <!--<van-icon name="cart-o" slot="right"></van-icon>-->
      <van-icon @click="$router.push('/user')" slot="right">
        {{JSON.stringify(userInfo) === '{}' ? '未登录':userInfo.userName}}
      </van-icon>
    </van-nav-bar>
    <!--轮播图-->
    <div class="carousel">
      <van-swipe :autoplay="3000">
        <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem" :key="index">
          <img :src="item.imgSrc" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--热门商品-->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-item" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index">
          <div class="hot-content">
            <img :src="item.img">
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!--推荐商品-->
    <div class="variety">
      <p class="variety-title">推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item,index) in varietyItem" :key="index">
          <img :src="item.img">
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
import {mapState} from 'vuex';
export default {
    data(){
        return {
            //轮播图
            carouselItem:[
                {
                    name: "img1",
                    imgSrc:"http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg"
                },
                {
                    name: "img2",
                    imgSrc:"http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg"
                },
                {
                    name: "img3",
                    imgSrc:"http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg"
                }
            ],
            //热门商品
            hotProducts: [
                {
                    name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
                    img:
                        "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
                    price: "3260",
                    company: "  曲阜市润众机械制造有限",
                    city: "曲阜市"
                },
                {
                    name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
                    img:
                        "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
                    price: "3260",
                    company: "  曲阜市润众机械制造有限",
                    city: "曲阜市"
                },
                {
                    name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
                    img:
                        "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
                    price: "2800",
                    company: "  曲阜市润众机械制造有限",
                    city: "曲阜市"
                },
                {
                    name: "   高港区手扶车带动土豆收获机收山芋机器",
                    img:
                        "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
                    price: "1900",
                    company: "  山东曲阜宏燊工贸有限公",
                    city: "曲阜市"
                },
                {
                    name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
                    img:
                        "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
                    price: "3260",
                    company: "  曲阜市润众机械制造有限",
                    city: "曲阜市"
                },
                {
                    name: "   厂家直销大型花生收获机 地下薯类挖收机",
                    img:
                        "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
                    price: "2800",
                    company: "  曲阜市润众机械制造有限",
                    city: "曲阜市"
                },
                {
                    name: "   地瓜土豆杀秧机",
                    img:
                        "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
                    price: "2380",
                    company: "  曲阜市汇林机械有限公司",
                    city: "曲阜市"
                },
                {
                    name: "   地瓜杀秧机",
                    img:
                        "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
                    price: "2380",
                    company: "  曲阜市汇林机械有限公司",
                    city: "曲阜市"
                },
                {
                    name: "   自走式大型花生去秧机 花生除秧自动装袋机",
                    img:
                        "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
                    price: "2582",
                    company: "  曲阜金源机械设备有限公",
                    city: "济宁市"
                },
                {
                    name: "   高效省人工花生摘果机 全新多功能去秧机",
                    img:
                        "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
                    price: "2581",
                    company: "  曲阜金源机械设备有限公",
                    city: "济宁市"
                },
                {
                    name: "   河北邢台花生摘果机 自动装袋脱果机图片",
                    img:
                        "http://img48.nongjx.com/2/20180715/636672620803202789496_198_170_5.jpg",
                    price: "2580",
                    company: "  曲阜金源机械设备有限公",
                    city: "济宁市"
                },
                {
                    name: "   大型花生收获机规格 链条式方便花生挖果机",
                    img:
                        "http://img47.nongjx.com/2/20180926/636735768787313154613_198_170_5.jpg",
                    price: "3260",
                    company: "  曲阜浩发机械有限公司",
                    city: "济宁市"
                },
                {
                    name: "   家用节能花生摘果机 自动装袋花生分离机",
                    img:
                        "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
                    price: "3460",
                    company: "  曲阜浩发机械有限公司",
                    city: "济宁市"
                },
                {
                    name: "   牵引式苞米杆打包机生产定制",
                    img:
                        "http://img67.nongjx.com/2/20170627/636341765014077992756_198_170_5.jpg",
                    price: "面议",
                    company: "  曲阜四达机械设备有限公",
                    city: "济宁市"
                }
            ],
            //控制一页显示三个
            swiperOption: {
                slidesPerView: 3
            },
            // 推荐商品，用mock模拟数据
            varietyItem:[]
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        let varietyUrl=url.getVarietyItem;
        axios.get(varietyUrl).then(res => {
            console.log(res);
            this.varietyItem = res.data;
        })
    },
    computed:{
        ...mapState(['userInfo'])
    }
}
</script>
<style lang="scss" scoped>
  .container{
    background: #eee;
  }
  .nav-title{
    z-index: 2!important;
    position: fixed;
    width: 100%;
  }
  .carousel {
    height: 3rem;
  &-item {
  img {
    width: 100%;
    height: 3rem;
  }
  }
  }
  .hot{
    margin-top: .2rem;
    background: #ffffff;
    font-size: 14px;
    &-title{
      margin-left: .1rem;
    }
    &-content{
      width: 2rem;
      text-align: center;
      img{
        height: 2rem;
        width: 2rem;
      }
    }
  }
  .variety{
    background: #ffffff;
    text-align: center;
    margin-top: .2rem;
    margin-bottom: 1rem;
    ul{
      display: flex;
      flex-wrap: wrap;/*换行*/
      justify-content: center;
    }
    &-item{
      flex-basis: 45%;
    }
    img{
      width: 2rem;
      height: 2rem;
    }
  }
</style>