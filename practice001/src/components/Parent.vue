<template>
  <div>
    <h3>{{msg}}</h3>
    <button @click="getChild()">获取子组件信息</button>
    <hr>
    <v-son :parent="this" ref="son"></v-son>
    <v-son02></v-son02>
  </div>
</template>

<script>
  import Son from './Son';
  import Son02 from './Son02'
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
      'v-son': Son,
      'v-son02': Son02
    }
  }
</script>

<style scoped>

</style>
