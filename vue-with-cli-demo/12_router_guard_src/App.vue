<template>
	<div>
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header"><h2>Vue Router Demo</h2></div>
			</div>
		</div>
		<div class="row">
			<banner/>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!-- 指定组件呈现的位置 -->
                        <router-view>
                        </router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import banner from './components/banner.vue'

export default {
	name: "App",
	components: {
        banner
	},
	data() {
		return {};
	},
};
</script>

<style>
</style>
