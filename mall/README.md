
# 移动端购物app
## 目录
- 技术栈与第三方库
- 功能介绍
- 安装与启动
## 技术栈与第三方库
#### client
1. vue全家桶(vue + vuex +vue-router)
2. vant组件库
```
安装：
npm install vant --save
按需引入：
首先安装： npm i babel-plugin-import -D
在babel.config.js 文件中配置：
plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
        }, 'vant']
    ]
然后根据需要引入相应组件
import { Tabbar, TabbarItem ,......}
Vue.use(Tabbar).use(TabbarItem)
```
3. axios与mock.js
```
npm install axios --save
npm install mockjs --save-dev
```
4. sass ： 
安装sass-loader

sass-loader依赖于node-sass
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
```
#### server
1. koa
2. MongoDB
3. mongoose
4. Robo 3T
## 功能简要介绍
##### 这是利用Vuecli3和vant组件库，MongoDB，koa2等技术实现的小型购物App，主要的功能如下：
##### 1. 首页
- 首页主要由轮播图、推荐商品、热门商品三个模块组成
- 轮播图用vant的Swipe组件实现
- 热门商品同样用Swipe组件实现横向滑动的效果
- 推荐商品的数据使用mockjs模拟生成
- 新建一个service.config.js文件，统一配置 URL ,方便后期管理
##### 2. 商品详情与分类
- 该部分分为左右两栏，左侧是分类列表，右侧是商品信息展示，用Layout组件实现
- 右侧商品上拉刷新加载
- 在详情页可以把商品添加购物车，在登录的状态下才能加购物车，否则跳转登录界面
##### 3. 购物车
- 用vant提供的card组件实现
##### 4. 登陆注册
- vuex存储用户信息
## 安装与启动
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
