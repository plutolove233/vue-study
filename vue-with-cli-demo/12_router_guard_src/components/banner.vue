<template>
	<div class="col-xs-2 col-xs-offset-2">
		<div class="list-group">
			<!-- router-link本质上仍是a标签 -->
			<router-link
				class="list-group-item"
				active-class="active"
				to="/home"
				>Home</router-link
			>
			<router-link
				class="list-group-item"
				active-class="active"
				to="/about"
				>About</router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "banner-component",
};
</script>

<style>
</style>