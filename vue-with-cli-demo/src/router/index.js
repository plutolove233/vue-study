// make router
import VueRouter from 'vue-router'

import About from '../pages/aboutPage.vue'
import Home from '../pages/homePage.vue'
import Message from '../pages/homeMessagePage.vue'
import News from '../pages/homeNewsPage.vue'
import Detail from '../pages/detailPage.vue'

export default new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'message',
                    component: Message,
                    children: [{
                        // path: 'detail',
                        name: 'msgDetail',
                        path: ':id/:name',
                        component: Detail,
                        // props为对象，该对象中的所有key-value组合最终都会通过props传给组件
                        // props: {
                        //     a: 100
                        // },

                        // props为布尔值，表示把路由收到的params参数通过props传给组件
                        props: true,

                        // props为函数，函数返回的对象中的key-value都会通过props传给组件
                        // props($route) {
                        // return {
                        //     id: $route.query.id,
                        //     name: $route.query.name
                        // }
                        // }
                    }]
                },
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: 'newsDetail',
                            path: ':id/:name',
                            component: Detail,
                            props: true,
                        }
                    ]
                }
            ]
        }
    ]
})