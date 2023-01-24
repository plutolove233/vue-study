<script setup lang="ts">
import { ref } from "vue"
import Student from './student.vue'
let name = "yizhigopher"
let age = 18;
let number = ref(0);
const student = ref({
    id: "001",
    name: "shy",
    score: 0,
});
function addNumber() {
    number.value++
}
function addScore(s:number) {
    student.value.score += s
}
</script>
<template>
    <h1>this is my demo</h1>
    <span>{{ name }}, {{ age }}</span>

    <div>component's number is {{ number }}</div>
    <button @click="addNumber">click me to add</button>
    <button @click="addScore(20)">click me to add score</button>
    <student :stu="student"/>
    
</template>

<style>

</style>
