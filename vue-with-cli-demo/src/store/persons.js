export default {
    namespaced: true,
    state: {
        personList: []
    },
    actions: {
        addNamedWang(ctx, value){
            console.log(value);
            if (value.name.indexOf('王') === 0) {
                ctx.commit('ADD_PERSON', value)
            }else{
                alert('please input name start with wang')
            }
        }
    },
    mutations: {
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    getters: {
        FirstPersonName(state){
            return state.personList[0]
        }
    }
}