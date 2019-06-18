<template>
  <div id="app">
    <h1>根节点app</h1>
    <hr>
    <v-test04></v-test04>
  </div>
</template>

<script>
import Test001 from "./components/Test001";
import Test002 from "./components/Test002";
import Test003 from "./components/Test003";
import Test004 from "./components/Test004";
export default {
  name: 'app',
  components: {
    'v-test04': Test004
  }
}
</script>

<style>

</style>
