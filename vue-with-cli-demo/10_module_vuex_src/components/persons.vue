<template>
	<div>
		<input
			class="inputArea"
			placeholder="please input the name of person"
			v-model="name"
		/>
		<button @click="addPerson">click me to add</button>
		<hr />
		<div>第一个人是 {{ firstName.name }}</div>

		<ul>
			<li v-for="p in personList" :key="p.id">
				{{ p.name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
	name: "persons-component",
	data() {
		return {
			name: "",
		};
	},
	computed: {
		// 模块化读取数据方式2
		personList() {
			return this.$store.state.personsCfg.personList;
		},
		firstName() {
			return this.$store.getters["personsCfg/FirstPersonName"];
		},
	},

	methods: {
		addPerson() {
			let p = {
				id: nanoid(),
				name: this.name,
			};
			// this.$store.dispatch('personsCfg/addNamedWang', p)
			this.$store.commit("personsCfg/ADD_PERSON", p);
		},
	},
};
</script>

<style>
.inputArea {
	width: 240px;
}
</style>