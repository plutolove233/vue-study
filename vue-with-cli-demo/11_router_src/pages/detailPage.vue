<template>
  <div>
    <!-- query writing style -->
    <!-- <li>消息编号{{$route.query.id}}</li>
    <li>消息名称{{$route.query.name}}</li> -->

    <!-- param writing style -->
    <!-- <li>消息编号{{$route.params.id}}</li>
    <li>消息名称{{$route.params.name}}</li> -->
    
    <!-- simplify with props -->
    <li>消息编号{{id}}</li>
    <li>消息名称{{name}}</li>
  </div>
</template>

<script>
export default {
    name: 'detail-vue',
    props: ['id', 'name'],
    data() {
        return {
        }
    },
}
</script>

<style>

</style>