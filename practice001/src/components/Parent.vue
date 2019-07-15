<template>
  <div>
    <h3>{{msg}}</h3>
    <button @click="getChild()">获取子组件信息</button>
    <hr>
    <v-son ref="son"></v-son>
  </div>
</template>

<script>
  import Son from './Son';
  export default {
    name: 'Parent',
    data () {
      return {
        msg: '15父组件主动获取子组件的数据和方法  子组件主动获取父组件的数据和方法'
      }
    },
    methods: {
      getChild() {
        //console.log(this.$refs.son.msg)
        this.$refs.son.run();
      },
      run() {
        alert('我是父组件run方法')
      }
    },
    props: [],
    components: {
      'v-son': Son
    }
  }
</script>

<style scoped>

</style>
