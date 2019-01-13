<template>
    <div>
        <van-tabs>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field lable="用户名：" required clearable v-model="longinUserName" placeholder="请输入用户名" />
                    <van-field lable="密码：" required clearable type="password" v-model="longinPassword" placeholder="请输入密码"/>
                </van-cell-group>
                <div>
                    <van-button @click="loginHandler" type="primary" size="large">登录</van-button>
                </div>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field lable="用户名：" required clearable v-model="registUserName" placeholder="请输入用户名" />
                    <van-field lable="密码：" required clearable type="password" v-model="registUserPassword" placeholder="请输入密码"/>
                </van-cell-group>
                <div>
                    <van-button @click="registHandler" type="primary" size="large">注册</van-button>
                </div>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import axios from 'axios';
    import url from '@/service.config.js'
    import {mapActions} from 'vuex';
    export default {
        data(){
            return{
                longinUserName:"",
                longinPassword:"",
                registUserName:"",
                registUserPassword:""
            }
        },
        methods:{
            ...mapActions(["loginAction"]),
            //注册处理
            registHandler(){
                axios({
                    url:url.registUser,
                    method:'post',
                    data:{ //发送给后端的数据
                        userName:this.registUserName,
                        password:this.registUserPassword
                    }
                }).then(res => {
                    if(res.data.code == 200){
                        console.log(res);
                        this.$toast.success("注册成功");
                        this.registUserName = this.registUserPassword = "";
                    }else {
                        this.$toast.fail("注册失败");
                        console.log(res);
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            //登录
            loginHandler(){
                axios({
                    url:url.loginUser,
                    method: 'post',
                    data:{
                        userName: this.longinUserName,
                        password: this.longinPassword
                    }
                }).then(res=>{
                    console.log(res);
                    if (res.data.code == 200){
                        new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                                resolve();
                            },1000)
                        }).then(()=>{
                            this.$toast.success("登录成功");
                            // 保存登录状态
                            this.loginAction(res.data.userInfo);
                            this.$router.go(-1);
                        }).catch(()=>{
                            this.$toast.fail("保存登录状态失败");
                            console.log(err);
                        })

                    }
                }).catch(err=>{
                    console.log(err);
                    this.$toast.fail("登录失败");
                })
            }
        }
    }
</script>

<style lang="scss">

</style>