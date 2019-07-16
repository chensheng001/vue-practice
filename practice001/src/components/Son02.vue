<template>
    <div id="son02">
      <h3>{{msg}}</h3>
    </div>
</template>

<script>
  import VueEvent from '../model/VueEvent'
    export default {
        name: "Son02",
        data () {
          return {
            msg: '我是子组件02'
          }
        },
        mounted() {
          VueEvent.$on('attrSon', data => {
            console.log(data)
          })
        }
    }
</script>

<style scoped>

</style>
