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
样例：[app.vue](./src/App.vue)
```
    1. 被用来给元素或者组件注册引用信息(id的代替者)
    2. 应用在html标签上获取的是真实dom元素，应用在组件标签上是组件实例对象
    3. 使用方式：<h1 ref='xxx'>或<component ref='xxx'>通过this.$refs.xxx获取
```

### 配置项props
样例：[student.vue](./src/components/Student.vue)
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