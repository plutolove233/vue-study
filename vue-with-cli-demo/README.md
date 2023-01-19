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

样例[mixin.js](./03_mixin_plugin_scoped_src/mixin.js)

```
    功能：可以把多个组件共用的配置提取成一个混入对象
    Notice:
        - 组件和混入对象含有同名选项时，组件优先
        - 同名生命周期将合并为一个数组，因此都会被调用。混入对象会比组件先调用
```

### plugins 插件

样例[plugins.js](./03_mixin_plugin_scoped_src/plugins.js)

```
    功能：增强Vue
    本质：包含一个install()方法，第一个参数是Vue
    通过Vue.use()使用插件
```

### scope 定义样式作用域

样例[School.vue](./03_mixin_plugin_scoped_src/components/School.vue)

```
    通过在定义样式时使用<style scoped>让样式在局部生效，防止冲突
```
