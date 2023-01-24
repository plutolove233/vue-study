<template>
	<div>
		<ul>
			<li v-for="n in news" :key="n.id">
				{{ n.name }}
				<button @click="showNewsDetail(n)">jump</button>
				<br />
				<input />
				<br /><br />
			</li>
		</ul>

		<router-view />
	</div>
</template>

<script>
export default {
	name: "news-page",
	data() {
		return {
			news: [
				{
					id: "001",
					name: "news 1",
				},
				{
					id: "002",
					name: "news 2",
				},
				{
					id: "003",
					name: "news 3",
				},
			],
		};
	},
	methods: {
		showNewsDetail(obj) {
			this.$router.push({
				name: "newsDetail",
				params: {
					id: obj.id,
					name: obj.name,
				},
			});
		},
	},

	// 路由组件特有的生命周期
	activated() {
        console.log('new active');
    },
	deactivated() {
        console.log('new inactive');
    },
};
</script>

<style>
</style>