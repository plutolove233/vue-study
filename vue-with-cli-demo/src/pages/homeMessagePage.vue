<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- jump route with query string -->
				<!-- <router-link
					:to="`/home/message/detail?id=${m.id}&name=${m.name}`"
				>
					{{ m.name }}
				</router-link> -->

				<!-- jump route with query object -->
				<!-- <router-link
					:to="{
						path: '/home/message/detail',
						query: {
							id: m.id,
							name: m.name,
						},
					}"
				>
					{{ m.name }}
				</router-link> -->

                <!-- jump with params -->
                <router-link :to="{
                    name:'msgDetail',
                    params: {
                        id: m.id,
                        name: m.name
                    }
                }"
				>
					{{ m.name }}
				</router-link>
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "msg-page",
	data() {
		return {
			messageList: [
				{
					id: "001",
					name: "message 1",
				},
				{
					id: "002",
					name: "message 2",
				},
				{
					id: "003",
					name: "message 3",
				},
			],
		};
	},
};
</script>

<style>
</style>