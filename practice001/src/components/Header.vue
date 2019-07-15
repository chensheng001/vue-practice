<template>
    <div>
      <div id="header">
        <h2>{{msg}}--{{homeMsg}}</h2>
        <button @click="homeRun()">get</button>
      </div>
      <div class="content">
        <button @click="getHome()">子组件获取父组件里的属性或者方法</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
          return {
            msg: '这是个herder组件'
          }
        },
        methods: {
          getHome() {
            /*console.log(this.home.msg)*/
            this.home.run();
          }
        },
        props: ['homeMsg','homeRun','home']
    }
</script>

<style scoped>
  #header {
    background: #ccc;
  }
</style>
