export default {
    namespaced: true,
    actions: {
        add(ctx, value){
            ctx.commit('ADD', value) // call ADD method in mutations
        }
    },
    mutations: {
        ADD(state, value){
            state.sum += value 
        }
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        }
    },
    state: {
        sum: 0
    }
}