<template>
    <div>
        <van-nav-bar title="商品类型"></van-nav-bar>
        <div>
            <van-row>
                <van-col class="nav" span="6">
                    <ul>
                        <li v-for="(item,index) in types" :key="index+'i'" :class="{active:active==index}" @click="selectCategory(item.typeId,index)">
                            {{item.typeName}}
                        </li>
                    </ul>
                </van-col>
                <van-col class="container" span="18">
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                        <van-list class="content" @load="onload" v-model="isLoading" :finished="finished">
                            <div class="content-item" @click="goDetail(item._id)" v-for="(item,index) in productList" :key="index">
                                <img :src="item.img" alt="">
                                <p class="content-item-name">{{item.name}}</p>
                                <p>{{item.price}}</p>
                            </div>
                        </van-list>
                    </van-pull-refresh>
                </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from "@/service.config.js"
    export default {
        data(){
            return {
                types:[],
                active:0,
                typeId:1,
                productList:[],
                start: 0,
                limit: 10,
                finished: false, //是否数据取完
                isLoading: false // 上拉加载
            }
        },
        created(){
            axios({
                url:url.getTypes
            }).then(res=>{
                console.log(res);
                this.types = res.data;
                this.selectCategory(this.typeId,this.active);
            }).catch(err=>{
                console.log(err);
            })
        },
        methods:{
            //选择分类
            selectCategory(typeId,index){
                this.active = index;
                this.typeId = typeId;
                this.productList = [];
                this.finished = false;
                this.getProductList();
            },

            //获取商品
            getProductList(){
                this.isLoading = true;
                axios({
                    url:url.getProductsByType,
                    method:'get',
                    params:{
                        typeId:this.typeId,
                        start:this.start,
                        limit:this.limit
                    }
                }).then(res=>{
                    console.log(res);
                    if(res.data.length !=0){
                        this.productList=this.productList.concat(res.data);
                    }else {
                        this.finished = true;
                    }
                    this.isLoading = false;
                }).catch(err=>{

                })
            },

            //加载
            onload(){
                setTimeout(()=>{
                    this.getProductList();
                },2000)
            },
            onRefresh(){
                setTimeout(()=>{
                    this.productList = [];
                    this.getProductList();
                },2000)
            },

            //详情
            goDetail(id){
                console.log(id);
                this.$router.push(`/detail/${id}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        background: #eee;
        li{
            height: 0.6rem;
            line-height: 0.6rem;
            border-bottom: 0.05rem solid #fff;
            padding: 3px;
            text-align: center;
        }
        .active{
            background: #fff;
        }
    }
    .container{
        position: fixed;
        top: 46px;
        right: 0;
        bottom: 1rem;
        overflow-y: scroll;
    }
    .content{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;
        &-item{
            width: 40%;
            text-align: center;
            padding: 0 10px;
            img{
                width: 2rem;
                height: 2rem;
            }
            &-name{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp:2;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>