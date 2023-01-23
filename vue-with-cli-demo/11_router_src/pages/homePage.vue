<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home/news"
						>News</router-link
					>
				</li>
				<li>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home/message"
						>Message</router-link
					>
				</li>
			</ul>

            <keep-alive include='news-page'>
                <router-view />
            </keep-alive>
            <!-- <keep-alive :include="['news-page']">
                <router-view />
            </keep-alive> -->
		</div>
	</div>
</template>

<script>
export default {
	name: "home-page",
	beforeDestroy() {
		console.log("home page will be destroyed");
	},
	mounted() {
		console.log("home page has been mounted");
	},
};
</script>

<style>
</style>