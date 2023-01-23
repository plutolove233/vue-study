// this is used to create store in vuex
import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

// 模块化
import calculatorCfg from './calculator'
import personsCfg from './persons'

// in order to respond actions in components
// you should only write logic code here
// const actions = {
//     add(ctx, value){
//         ctx.commit('ADD', value) // call ADD method in mutations
//     }
// }

// in order to operate data in vuex
// you should only write operation code
// const mutations = {
//     ADD(state, value){
//         state.sum += value 
//     }
// }

// in order to store data
// const state = {
//     sum: 0
// }

// you can process your data here
// const getters = {
//     bigSum(state){
//         return state.sum * 10
//     }
// }

const store = new Vuex.Store({
    modules: {
        calculatorCfg,
        personsCfg
    }
})

// expose store to others
export default store