<script setup lang="ts">
const props = defineProps(['stu'])
</script>

<template>
    <div>
        学生姓名: {{ props.stu.name }}
    </div>
    <div>
        学生分数: {{ props.stu.score }}
    </div>
</template>