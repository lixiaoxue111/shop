<template>
    <div>
        <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
        <img class="detail-img" :src="detail.img" alt="">
        <div class="detail">
            <p class="detail-name">{{detail.name}}</p>
            <p class="detail-price">{{detail.price}}</p>
            <p class="detail-company">{{detail.company}}</p>
            <p class="detail-city">{{detail.city}}</p>
        </div>
        <div class="toolbar">
            <van-goods-action>
                <van-goods-action-mini-btn icon="chat-o" text="客服" />
                <van-goods-action-mini-btn icon="cart-o" text="购物车"/>
                <van-goods-action-big-btn text="加入购物车" @click="addCart"/>
                <van-goods-action-big-btn primary text="立即购买"/>
            </van-goods-action>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                detail:{}
            }
        },
        created(){
            axios({
                url:url.getDetail,
                method:'get',
                params:{
                    id:this.$route.params.id
                }
            }).then(res=>{
                console.log(res);
                this.detail = res.data;
            }).catch(err=>{
                console.log(err);
            })
        },
        methods:{
            addCart(){
                if(JSON.stringify(this.userInfo)==='{}'){
                    this.$toast.fail('请先登录');
                    setTimeout(()=>{
                        this.$router.push('/user');
                    })
                }else {
                    //加入购物车
                    axios({
                        url:url.addCart,
                        method:'post',
                        data:{
                            productId:this.detail._id,
                            userId:this.userInfo._id
                        }
                    }).then(res=>{
                        console.log(res);
                        if (res.data.code==200){
                            this.$toast.success(res.data.message);
                        }
                    }).catch(err=>{
                        console.log(err);
                    })
                }
            }
        },
        computed:{
            ...mapState(['userInfo'])
        }
    }
</script>

<style lang="scss" scoped>
    .detail{
        padding: .2rem;
        &-img{
            width: 100%;
            height: 5rem;
        }
        &-name{
            color: #333;
            font-weight: bold;
        }
        &-price{
            color: #ff7300;
            font-size: 0.4rem;
        }
    }

</style>