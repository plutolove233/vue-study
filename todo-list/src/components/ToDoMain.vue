<template>
	<ul class="todo-main">
		<div v-for="item in todo" :key="item.id">
			<todo-item
				:item="item"
				@changeStatus="changeStatus"
				@deleteTodo="deleteTodo"
			/>
		</div>
	</ul>
</template>

<script>
import TodoItem from "./ToDoItem.vue";
export default {
	name: "ToDoMain",
	components: {
		TodoItem,
	},
	props: ["todo"],
	data() {
		return {
			msg: "",
		};
	},
	methods: {
		changeStatus(id) {
			this.$emit("changeStatus", id);
		},
		deleteTodo(id) {
			this.$emit("deleteTodo", id);
		},
	},
};
</script>

<style scoped>
/*main*/
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 10px;
}
</style>