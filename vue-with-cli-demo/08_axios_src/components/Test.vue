<template>
	<div>
		<button @click="getStudent">click me to get api info</button>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "test-com",
	methods: {
		getStudent() {
			axios.get("http://localhost:8000/student/get").then((res) => {
				console.log(res.data);
			});
		},
	},
};
</script>

<style scoped>
h1 {
	background-color: orange;
}
</style>