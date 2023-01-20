<template>
	<div id="app">
		<!-- 默认插槽示例 -->
		<div class="slotDemo">
			<test :title="'美食'">
				<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" />
			</test>
			<test :title="'电影'">
				<video
					controls
					src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
				></video>
			</test>
			<test :title="'游戏'">
				<ul>
					<li v-for="(item, index) in games" :key="index">
						{{ item }}
					</li>
				</ul>
			</test>
		</div>
		<hr />
		<!-- 具名插槽示例 -->
		<div class="slotDemo">
			<demo-2 :title="'美食'">
				<img
					slot="center"
					src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
				/>
				<a slot="footer" href="http://www.atguigu.com">more info</a>
			</demo-2>
		</div>
		<hr />
		<!-- 作用域插槽 -->
		<div class="slotDemo">
			<demo-3 :title="'girls'">
				<!-- 用template接收组件的数据 -->
				<!-- or <template slot-scope='res'> ... v-for='(p, index) in res.person' -->
				<template slot-scope="{ person }">
					<ol>
						<li v-for="(item, index) in person" :key="index">
							{{ item }}
						</li>
					</ol>
				</template>
			</demo-3>
		</div>
	</div>
</template>

<script>
import Test from "./components/Test.vue";
import Demo2 from "./components/slot2.vue";
import demo3 from "./components/slot3.vue";

export default {
	name: "App",
	components: {
		Test,
		Demo2,
		demo3,
	},
	data() {
		return {
			foods: ["火锅", "烧烤", "小龙虾", "牛排"],
			games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
			films: [
				"《教父》",
				"《拆弹专家》",
				"《你好，李焕英》",
				"《尚硅谷》",
			],
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.slotDemo {
	display: flex;
	justify-content: space-around;
}
</style>
