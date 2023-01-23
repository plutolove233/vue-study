<template>
	<div id="app">
		<view-area />
		<calculator />
        <hr>
		<persons />
	</div>
</template>

<script>
import ViewArea from "./components/view.vue";
import Calculator from "./components/addCalculator.vue";
import Persons from "./components/persons.vue";

export default {
	name: "App",
	components: {
		ViewArea,
		Calculator,
		Persons,
	},
	data() {
		return {};
	},
};
</script>

<style>
</style>
