<template>
  <div>
    <h2>{{number}}</h2>
    <button @click="add">add number</button>
    <h2>{{name}}</h2>
    <button @click="sendStudentName">send name to app</button>
    <button @click="unbind">unbind</button>
    <button @click="death">die</button>
  </div>
</template>

<script>
export default {
    name: 'student-component',
    data() {
        return {
            name: 'xxx',
            number: 0
        }
    },
    methods: {
        add(){
            console.log('add execute');
            this.number++
        },
        sendStudentName(){
            this.$emit('getName', this.name)
        },
        unbind(){
            // 解绑所有
            this.$off()
            // 解绑单个自定义事件
            // this.$off('getName')
        },
        death(){
            this.$destroy()
        }
    }
}
</script>

<style>

</style>