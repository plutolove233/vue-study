import { hunru } from "./mixin";

export default {
    install(Vue, x, y, z) {
        console.log(x, y, z);
        // 定义全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        Vue.directive('fbind', {
            bind(elem, binding){
                elem.value = binding.value
            },
            inserted(elem){
                elem.focus()
            },
            update(elem, binding){
                elem.value = binding.value
            },
        })

        // 定义混入
        Vue.mixin(hunru)

        // 给Vue原型添加方法（vm, vc均可调用）
        Vue.prototype.hello = ()=>{
            alert('Hello...')
        }
    }
}