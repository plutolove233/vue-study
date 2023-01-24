// make router
import VueRouter from 'vue-router'

import About from '../pages/aboutPage.vue'
import Home from '../pages/homePage.vue'
import Message from '../pages/homeMessagePage.vue'
import News from '../pages/homeNewsPage.vue'
import Detail from '../pages/detailPage.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '主页'
            },
            children: [{
                    path: 'message',
                    component: Message,
                    // 独享路由守卫
                    beforeEnter(to, from, next) {
                        if (localStorage.getItem('school') === 'NCEPU') {
                            next()
                        }else{
                            alert('无权查看')
                        }
                    },
                    meta: {
                        title: '消息'
                    },
                    children: [{
                        name: 'msgDetail',
                        path: ':id/:name',
                        component: Detail,
                        props: true,
                        meta: {
                            title: '消息详情'
                        },
                    }]
                },
                {
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: "新闻"
                    },
                    children: [{
                        name: 'newsDetail',
                        path: ':id/:name',
                        component: Detail,
                        props: true,
                    }],
                }
            ]
        }
    ]
})

// 全局前置路由
router.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'NCEPU') {
            next()
        } else {
            alert('无权查看')
        }
    } else {
        next()
    }
})

// 全局后置路由
router.afterEach((to) => {
    document.title = to.meta.title || 'vue_test'
})

export default router