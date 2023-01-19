// 入口

// 引入vue
import Vue from 'vue'
// 引入APP组件，是所有组件的父组件
import App from './App.vue'

import plugins from './plugins'

Vue.config.productionTip = false
// 全局混入
// Vue.mixin(hunru)

Vue.use(plugins, 1, 2, 3)

// 创建vue实例对象
new Vue({
    // 将APP组件放入容器中
    render: h => h(App),
}).$mount('#app')