### vue-with-cli-demo

- ###### Project setup

```
    yarn install
```

- ###### Compiles and hot-reloads for development

```
    yarn serve
```

- ###### Compiles and minifies for production

```
    yarn build
```

- ###### Lints and fixes files

```
    yarn lint
```

- ###### Customize configuration
  See [Configuration Reference](https://cli.vuejs.org/config/).

### ref 配置属性

样例：[app.vue](./02_ref_props_src/App.vue)

```
    1. 被用来给元素或者组件注册引用信息(id的代替者)
    2. 应用在html标签上获取的是真实dom元素，应用在组件标签上是组件实例对象
    3. 使用方式：<h1 ref='xxx'>或<component ref='xxx'>通过this.$refs.xxx获取
```

### 配置项 props

样例：[student.vue](./02_ref_props_src/components/Student.vue)

```
    功能：让组件接受外部传过来的数据
    1. 传递数据 <s :name="'xxxx'">
    2. 接收数据：
        - 简单接收
        - 限制类型接收
        - 限制类型、限制必要性、指定默认值
    props只读，不可修改如果需要修改，须在data中定义局部属性接收props。例如：
        data(){
            return {
                myData: this.name,
            }
        },
        props: ['name']
```

### mixins 混入

样例：[mixin.js](./03_mixin_plugin_scoped_src/mixin.js)

```
    功能：可以把多个组件共用的配置提取成一个混入对象
    Notice:
        - 组件和混入对象含有同名选项时，组件优先
        - 同名生命周期将合并为一个数组，因此都会被调用。混入对象会比组件先调用
```

### plugins 插件

样例：[plugins.js](./03_mixin_plugin_scoped_src/plugins.js)

```
    功能：增强Vue
    本质：包含一个install()方法，第一个参数是Vue
    通过Vue.use()使用插件
```

### scope 定义样式作用域

样例：[School.vue](./03_mixin_plugin_scoped_src/components/School.vue)

```
    通过在定义样式时使用<style scoped>让样式在局部生效，防止冲突
```

### 自定义事件

样例：[example](./04_customEvent_src)

```
    1. 一种组件的通信方式 子组件===>父组件
    2. 使用场景：子组件想给父组件传数据，那么要在父组件中给子组件绑定自定义事件
    3. 绑定自定义事件
        a. 使用v-on，例如: <demo @eventName='method'>
        b. 使用ref，在父组件挂载完成时添加。例如:
            <demo ref='demo'>
            ...
            mounted(){
                ...
                this.$refs.demo.$on('eventName', method)
            }
        c. 可以使用once修饰符使事件只触发一次
    4. 解绑:
        - this.$off(['eventName1', 'eventName2'...]) // unbind list
        - this.$off('eventName') // unbind one
        - this.$off() // unbind all
    5. 触发自定义事件: this.$emit('eventName', ...params)
    6. 组件上也可以绑定原生DOM事件，但需要使用native修饰符。
       如果不加修饰符，会认为是自定义事件
       例如: <demo @click.native='...'>
    7. Warning: 通过this.$refs.demo.$on('eventName', method)绑定自定义事件时，method要么在methods中，要么使用箭头函数
```

### 全局事件总线

样例：[global bus](./05_global_bus_src/)

```
    可以在任意组件之间进行通信，满足一下条件
        - 所有组件对象都能使用它--->通过prototype
        - 这个对象能够使用$on,$emit,$off操作--->vm
```

### 消息订阅与发布

样例: [subscribe and publish](./06_subAndPub_src/)

```
    1. install: npm install pubsub-js@1.6.0 // 目前只有1.6.0版本支持订阅和发布
    2. 引用: import pubsub form 'pubsub-js'
    3. 建议在beforeDestroy中使用pubsub.unsubscribe(pid)取消订阅
```

### $nextTick

样例: [nextTick](./07_nextTick_src/)

```
    原因：VUE更新DOM是在每个函数接收才会去更新
    作用：在下一次DOM元素更新结束后执行其指定的回调
    什么时候用：当改变数据后要基于更新后的DOM进行某些操作时，要在nextTick所指定的回调函数中执行

```

### Animate 动画效果

样例: [example](./07_nextTick_src/components/Test.vue)

```
    install: npm install animate.css --save
```

you can see more at [Animate.css](https://animate.style/)

### axios

样例: [demo](./08_axios_src/components/Test.vue)

```
    install: npm install axios
```

### slot

样例: [slot](./09_slot-demo_src)

```
    1. 让父组件可以向子组件指定位置插入html结构，也是一种组件之间通信的方式
    2. 分类：
        a. 默认插槽
        b. 具名插槽: 父组件指明放入子组件的那个插槽 通过标签 slot='slot-name'定位
        c. 作用域插槽: 当数据在子组件中，但渲染的结构由父组件确定时。通过slot-scope='data'接收
           data是一个结构体对象，可以使用es6语法解构获取相关值
```

### vuex-demo

样例: [vuex](./10_module_vuex_src/)

1. 理解 vuex: 专门在 vue 中实现集中式数据管理的插件
2. 搭建 vuex 环境: npm i vuex@3 // vue2 必须设置版本为 3
3. 基本使用:
   - 获取 vuex 中的数据(state):
   ```js
   this.$store.state.xxx;
   ```
   - 修改 vuex 中的数据:
   ```js
   this.$store.dispatch("method name", data);
   or;
   this.$store.commit("method name", data);
   ```
   - 获取 vuex 中修饰过的数据(getter):
   ```js
   this.$store.getters.xxx;
   ```
4. map 方法使用:
   - 导入:
   ```js
   import { mapState, mapGetters } from "vuex";
   ```
   - 借助计算属性实现:
     - 获取 vuex 中的数据(state):
     ```js
     ...mapState(['xxx'])
     or
     ...mapState({name: 'xxx'})
     ```
     - 获取 vuex 中修饰过的数据(getter):
     ```js
     ...mapGetters(['xxx'])
     or
     ...mapGetters({name: 'xxx'})
     ```
   - 借助 methods 实现:
     - 修改 vuex 中的数据:
     ```js
     Actions: ...mapActions({componentMethodName: 'action_name'})
           or ...mapActions(['action_name'])
     Mutations: ...mapMutations({componentMethodName: 'mutations_name'})
             or ...mapActions(['mutations_name'])
     ```
5. 模块化+命名空间
   (1) 目的: 提高代码维护性，让多种数据分类明确
   (2) 为解决不同模块命名冲突的问题，将模块的 namespaced 置为 true
   (3) 样例： 模块[persons](./10_module_vuex_src/store/persons.js) 导入模块[index](./10_module_vuex_src/store/index.js)
   (4) 获取数据:
   - 读取 state 数据:
   ```js
   // 方式 1:直接读取
   this.$store.state.moduleName.dataName
   // 方式 2: 借助mapState
   ...mapState('moduleName', ['dataName'...])
   ```
   - 读取 getter 数据:
   ```js
   // 方式 1
   this.$store.getters['moduleName/getterName']
   // 方式 2
   ...mapGetters('moduleName', ['getterName'...])
   ```
   - 调用方法:
     - dispatch:
     ```js
     // method 1
     this.$store.dispatch('moduleName/actionName', data)
     // method 2
     ...mapActions('moduleName', ['actionName'])
     ...mapActions('moduleName', {
         methodName: 'actionName'
     })
     ```
     - commit:
     ```js
     //method 1
     this.$store.commit('moduleName/mutationName', data)
     // method 2
     ...mapMutations('moduleName', ['mutationName'])
     ...mapMutations('moduleName', {
         methodName: 'mutationName'
     })
     ```

### vue-router

样例: [example](./11_router_src/)

1. 目的: 实现 SPA 应用
2. 基本路由：
   1. 安装: npm i vue-router@3 // vue2 必须设置版本为 3
   2. 应用插件 Vue.use(VueRouter)
   3. 编写配置[==>router config](./11_router_src/router/index.js)
   4. 实现切换:
   ```html
   <router-link> ... </router-link>
   ```
   5. 指定展示位:
   ```html
   <router-view />
   ```
   6. notice: 路由组件一般放在 pages 中，而不是 components 中
3. 参数传递： 1. query 传递[==>example@line 5](./11_router_src/pages/homeMessagePage.vue) 2. params 传递[==>example@line 25](./11_router_src/pages/homeMessagePage.vue)
   <font color='red'>注意：当使用 params 传递参数时，必须通过路由 name 作为配置项</font> 3. 路由的 props 配置: [you can see example here@line 27](./11_router_src/router/index.js)

4. 编程式导航:
   ```
   - this.$router.push({...})    内传的对象与'router-link'中的to相同
   - this.$router.replace({...})
   - this.$router.forward()      前进
   - this.$router.back()         后退
   - this.$router.go(n)          n为正数，前进；否则后退
   ```
5. 缓存路由组件:

   1. 作用: 让不展示的组件保持挂载
   2. 例如: [you can see example here@line 24](./11_router_src/pages/homePage.vue)
      <font color='red'>keep-alive 中的 include 和 exclude 应传组件的名字</font>

6. 路由组件特定的生命周期:
   - activated&deactivated [example@line51](./11_router_src/pages/homeNewsPage.vue)

### 路由守卫

1. 作用: 对路由进行权限控制
2. 分类:
   1. 全局守卫[example@line 69](./12_router_guard_src/router/index.js)
   2. 独享守卫[example@line 29](./12_router_guard_src/router/index.js)
   3. 组件守卫[example@line 9](./12_router_guard_src/pages/aboutPage.vue)
