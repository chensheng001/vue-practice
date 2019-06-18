<template>
    <div id="header">
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
          return {
            msg: '这是个herder组件'
          }
        }
    }
</script>

<style scoped>
  #header {
    background: #ccc;
  }
</style>
