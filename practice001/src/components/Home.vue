<template>
  <div>
    <v-header :homeMsg="msg" :homeRun="run" :home="this"></v-header>
    <h2>{{msg}}--{{this.$store.state.count}}--{{this.$store.getters.computedCount}}</h2>
    <hr>
    <v-life-circle v-if="flag"></v-life-circle>
    <button type="button" @click="toggle()">挂载或卸载lifeCircle</button>
    <button type="button" @click="incCount()">执行vuex里的方法</button>
  </div>
</template>

<script>
  import Header from './Header';
  import LifeCircle from './LifeCircle';
  import store from '../vuex/store';
  export default {
    data () {
      return {
        msg: '这是个home组件',
        flag: true
      }
    },
    store,
    methods: {
      run() {
        alert('这是个home里的run方法')
      },
      toggle() {
        this.flag = !this.flag;
      },
      incCount() {
        //this.$store.commit('incCount');
        this.$store.dispatch('incMutationCount');
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
