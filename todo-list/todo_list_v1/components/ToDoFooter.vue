<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{ doneCounter }}</span> / 全部{{ todoNumber }}
		</span>
		<button class="btn btn-danger" @click="clearAllDone">
			清除已完成任务
		</button>
	</div>
</template>

<script>
export default {
	props: ["todo"],
	computed: {
		doneCounter() {
			let cnt = 0;
			this.todo.forEach((elem) => {
				if (elem.done) {
					cnt++;
				}
			});
			return cnt;
		},
		todoNumber() {
			return this.todo.length;
		},

		isAll: {
			get() {
				return (
					this.doneCounter === this.todoNumber && this.todoNumber > 0
				);
			},
			set(v) {
				this.$emit("checkAll", v);
			},
		},
	},
	methods: {
		clearAllDone() {
			if (confirm("确认删除所有已完成的吗?")) {
				this.$emit("clearDone");
			}
		},
	},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>