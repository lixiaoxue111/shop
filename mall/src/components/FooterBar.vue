<template>
    <van-tabbar v-model="active" @change="change(active)">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="comment-o" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        created(){
            this.active = parseInt(localStorage.getItem('active'));
        },
        methods:{
            change(active){
                console.log(active);
                localStorage.setItem('active',active);
            }
        }
    }
</script>

<style lang="scss">

</style>