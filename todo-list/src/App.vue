<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<!-- 监听子组件触发的事件 -->
			<todo-header @addTodoItem="pushIntoTodoList" />
			<todo-main
				:todo="todoList"
				@changeStatus="modifyTodoStatus"
				@deleteTodo="deleteTodo"
			/>
			<todo-footer
				:todo="todoList"
				@clearDone="clearAllDone"
				@checkAll="selectAll"
			/>
		</div>
	</div>
</template>

<script>
import TodoHeader from "./components/ToDoHeader.vue";
import TodoMain from "./components/ToDoMain.vue";
import TodoFooter from "./components/ToDoFooter.vue";

export default {
	name: "App",
	components: {
		TodoHeader,
		TodoMain,
		TodoFooter,
	},
	data() {
		return {
			todoList: [],
		};
	},
	methods: {
		modifyTodoStatus(id) {
			this.todoList.forEach((element) => {
				if (element.id === id) {
					element.done = !element.done;
				}
			});
		},
		pushIntoTodoList(item) {
			this.todoList.unshift(item);
		},
		deleteTodo(id) {
			this.todoList = this.todoList.filter((elem) => elem.id !== id);
		},
		clearAllDone() {
			this.todoList = this.todoList.filter((elem) => !elem.done);
		},
		selectAll(v) {
			this.todoList.forEach((elem) => {
				elem.done = v;
			});
		},
	},
};
</script>

<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
		0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}
.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
