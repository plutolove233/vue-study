<template>
	<div class="category">
		<h3>{{ title }}</h3>
        <!-- 通过name确定插槽的位置 -->
        <slot name="center">默认值，当使用者没有传递具体结构时，会出现</slot>
        <slot name="footer">默认值，当使用者没有传递具体结构时，会出现</slot>
	</div>
</template>

<script>
export default {
	name: "slot2-demo",
    props: ['title']
};
</script>

<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3 {
	text-align: center;
    background-color: orange;
}
video{
    width: 100%;
}
img{
    width: 100%;
}
</style>