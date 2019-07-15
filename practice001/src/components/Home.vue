<template>
  <div>
    <v-header :homeMsg="msg" :homeRun="run" :home="this"></v-header>
    <h2>{{msg}}</h2>
    <hr>
    <v-life-circle v-if="flag"></v-life-circle>
    <button type="button" @click="toggle()">挂载或卸载lifeCircle</button>
  </div>
</template>

<script>
  import Header from './Header';
  import LifeCircle from './LifeCircle';
  export default {
    data () {
      return {
        msg: '这是个home组件',
        flag: true
      }
    },
    methods: {
      run() {
        alert('这是个home里的run方法')
      },
      toggle() {
        this.flag = !this.flag;
      }
    },
    components: {
      'v-header': Header,
      'v-life-circle': LifeCircle,
    }
  }
</script>

<style scoped>

</style>
