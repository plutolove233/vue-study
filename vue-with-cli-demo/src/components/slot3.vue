<template>
	<div class="category">
		<h3>{{ title }}</h3>
        <slot :person='girls'>默认值，当使用者没有传递具体结构时，会出现</slot>
	</div>
</template>

<script>
export default {
	name: "slot3-demo",
    props: ['title'],
    data() {
        return {
            girls:['2B', 'Tifa', 'Mai Shiranui']
        }
    },
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