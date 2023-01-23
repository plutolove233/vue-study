<template>
	<div>
		<h1>{{ sum }}</h1>
		<h3>{{ bigSum }}</h3>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
	name: "view-component",
	data() {
		return {};
	},

	computed: {
		// ...mapState({
		//     'sum': 'sum'
		// })
		// if the name here is equal with variate name in state, you can
		...mapState('calculatorCfg',["sum"]),

		// ...mapGetters({
		// 	bigSum: "bigSum",
		// }),
        ...mapGetters('calculatorCfg' ,['bigSum'])
	},
};
</script>

<style>
</style>