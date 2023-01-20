<template>
	<div>
		<h2>name is {{ studentName }}</h2>
		<input :value="age" :disabled="isEdit" ref="inputTitle" />
		<button @click="handleEdit">edit</button>
	</div>
</template>

<script>
export default {
	name: "student-demo",
	data() {
		return {
			isEdit: true,
			studentName: "xxx",
			age: 18,
			sex: "male",
		};
	},
	methods: {
		handleEdit() {
			this.isEdit = false;
			this.$nextTick(() => {
				this.$refs.inputTitle.focus();
			});
		},
	},
};
</script>

<style>
</style>