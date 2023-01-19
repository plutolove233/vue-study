<template>
	<div id="student" class="demo">
		<!-- 组件的结构 -->
		<h2>学校地址: {{ address }}</h2>
		<h2>学校名称: {{ name }}</h2>
		<button @click="sayHello">click me to test hello</button>
		<!-- 测试定义的指令 -->
		<input type="text" v-fbind="name" />
	</div>
</template>

<script>
import { hunru } from "../mixin";

// 组件的交互代码
export default {
	name: "school-component",
	data() {
		return {
			address: "北农路2号",
			name: "NCEPU",
		};
	},
	methods: {
		sayHello() {
			this.hello();
		},
	},
	mixins: [hunru],
};
</script>

<style scoped>
.demo {
	background-color: orange;
}
</style>