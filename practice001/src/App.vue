<template>
  <div id="app">
    <v-my-router></v-my-router>
  </div>
</template>

<script>
import Test001 from "./components/Test001";
import Test002 from "./components/Test002";
import Test003 from "./components/Test003";
import Test004 from "./components/Test004";
import Home from "./components/Home";
import VueResource from "./components/VueResource";
import LifeCircle from "./components/LifeCircle";
import Parent from './components/Parent';
import MyRouter from './components/MyRouter'
export default {
  name: 'app',
  components: {
    'v-test04': Test004,
    'v-home': Home,
    'v-vue-resource': VueResource,
    'v-life-circle': LifeCircle,
    'v-parent': Parent,
    'v-my-router': MyRouter
  }
}
</script>

<style>

</style>
