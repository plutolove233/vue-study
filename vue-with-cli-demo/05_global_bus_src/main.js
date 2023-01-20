// 入口

// 引入vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

// 创建vue实例对象
new Vue({
    // 将APP组件放入容器中
    render: h => h(App),
    beforeCreate(){
        // 定义全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount('#app')