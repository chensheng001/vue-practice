<template>
  <div>
    <v-header></v-header>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  import Header from './Header';
  export default {
    data () {
      return {
        msg: '这是个home组件'
      }
    },
    methods: {
      run() {
        alert('这是个run方法')
      }
    },
    components: {
      'v-header': Header
    }
  }
</script>

<style scoped>

</style>
