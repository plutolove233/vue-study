// 入口

// 引入vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

import VueRouter from 'vue-router'

import router from './router'

Vue.use(VueRouter)

// 创建vue实例对象
new Vue({
    // 将APP组件放入容器中
    render: h => h(App),
    router: router
}).$mount('#app')