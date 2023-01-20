<template>
	<div>
		<transition
			appear
			name="animate__animated animate__bounce"
			enter-active-class="animate__bounceInDown"
		>
			<h1>hello</h1>
		</transition>
		<hr />
		<transition-group
			appear
			name="animate__animated animate__bounce"
			enter-active-class="animate__bounceInDown"
		>
			<h1 key="1">hello</h1>
			<h1 key="2">World</h1>
		</transition-group>
	</div>
</template>

<script>
import "animate.css";
export default {
	name: "test-com",
};
</script>

<style scoped>
h1 {
	background-color: orange;
}
</style>