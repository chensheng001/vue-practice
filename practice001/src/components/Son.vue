<template>
    <div>
      <h3>{{msg}}</h3>
      <button @click="getParent()">获取父组件信息</button>
    </div>
</template>

<script>
    export default {
        name: "Son",
        data() {
          return {
            msg: '我是子组件son'
          }
        },
        methods: {
          run() {
            alert('我是子组件run方法')
          },
          getParent() {
            //console.log(this.$parent.msg)
            this.$parent.run();
          }
        }
    }
</script>

<style scoped>

</style>
