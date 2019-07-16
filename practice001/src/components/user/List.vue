<template>
    <div>
      用户信息列表
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
          return {
            list: ['张三','李四','王二']
          }
        }
    }
</script>

<style scoped>

</style>
