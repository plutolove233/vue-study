<template>
	<li>
		<label>
			<input
				type="checkbox"
				:checked="item.done"
				@change="transDone(item.id)"
			/>
			<span>{{ item.content }}</span>
		</label>
		<button class="btn btn-danger" @click="deleteTodo(item.id)">
			删除
		</button>
	</li>
</template>

<script>
export default {
	name: "ToDoItem",
	props: ["item"],
	methods: {
		transDone(id) {
			this.$emit("changeStatus", id);
		},
		deleteTodo(id) {
			// console.log(id);
            if (confirm('确认删除吗?')) {
                this.$emit('deleteTodo', id)
            }
		},
	},
};
</script>

<style scoped>
/*item*/
li {
	list-style-type: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	display: none;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}
li:hover {
	background-color: rgb(240, 240, 240);
}
li:hover button {
	display: block;
}
</style>