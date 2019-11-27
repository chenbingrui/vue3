//  入口文件  

import Vue from 'vue'

import './lib/mui/css/mui.min.css'



// 按需导入 mint-ui 组件
import { Header } from 'mint-ui'
//注册到 Vue 上面
Vue.component(Header.name,Header)




//  导入根组件
import app from './App.vue'




var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(app)
})