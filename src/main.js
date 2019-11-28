//  入口文件  

import Vue from 'vue'

//导入 路由 的包
import VueRouter from 'vue-router'
// // 注册到vue
Vue.use(VueRouter)

// 导入 vue-resource
import VueResource from 'vue-resource'
//  注册到 vue 上
Vue.use(VueResource)


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 按需导入 mint-ui 组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
//注册到 Vue 上面
Vue.component(Header.name,Header)
// 首页轮播图组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



//  导入路由模块
import router from './router.js'

//  导入根组件
import app from './App.vue'




var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(app),
    router  //将路由挂载到 vm 实例上
})