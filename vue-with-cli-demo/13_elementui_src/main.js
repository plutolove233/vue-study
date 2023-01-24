// 入口

// 引入vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

// 按需引入
import {
    Button,
    Row
} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)

// 创建vue实例对象
new Vue({
    // 将APP组件放入容器中
    render: h => h(App),
}).$mount('#app')