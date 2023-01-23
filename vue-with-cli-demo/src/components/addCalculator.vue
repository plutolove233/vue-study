<template>
	<div>
		<button @click="minus(-1)">-</button>
		<span> / </span>
		<button @click="add(1)">+</button>
	</div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
	name: "add-component",
	methods: {
		// add() {
		//     // you can call mutations directly here
		//     this.$store.commit('ADD', 1)
		// },
		// minus() {
		//     this.$store.dispatch('add', -1)
		// },

        // mapActions与mapMutations使用时，若需要传递参数，在模板中规定事件时需要传递好参数，否则参数就是事件对象
		...mapActions('calculatorCfg' ,{
            minus: 'add',
            add: 'add'
        }),

        ...mapMutations('calculatorCfg', {
            add: 'ADD'
        })
	},
};
</script>

<style>
</style>