<template>
    <div>
        <van-nav-bar title="购物车"></van-nav-bar>
        <div class="card">
            <van-card v-for="(item,index) in productList" :key="index" :price="item.price" :desc="item.company"
                      :title="item.name" :thumb="item.img">
                <div slot="footer">
                    <van-button size="mini" @click="delCart(item._id, index)">删除</van-button>
                </div>
            </van-card>
        </div>
        <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"></van-submit-bar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import axios from 'axios'
    import url from '@/service.config.js'
    export default {
        data(){
          return {
            productList:[],
          }
        },
        computed:{
            ...mapState(['userInfo']),
            //计算商品总价
            totalPrice(){
                return this.productList.reduce((sum,elem)=>{
                    sum+=elem.price;
                    return sum
                },0) * 10 * 10;
            }
        },
        created(){
            //验证用户是否登录
            if(JSON.stringify(this.userInfo) === '{}'){
                this.$toast.fail('请先登录');
                setTimeout(()=>{
                    this.$router.push('/user');
                },1000)
            }else {
                axios({
                    url:url.getCart,
                    method:'get',
                    params:{
                        userId:this.userInfo._id
                    }
                }).then(res=>{
                    for(let item of res.data){
                        this.productList.push(item.productId);
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        methods:{
            //提交订单
            onSubmit(){
                this.$toast.success('进入付款页面');
            },
            //删除购物车商品
            delCart(id,index){
                this.productList.splice(index,1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .submit-bar{
        margin-bottom: 1rem;
    }
</style>