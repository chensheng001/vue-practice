<template>
  <div id="app">
    <h1>根节点app</h1>
    <hr>
    <Test004></Test004>
  </div>
</template>

<script>
import Test001 from "./components/Test001";
import Test002 from "./components/Test002";
import Test003 from "./components/Test003";
import Test004 from "./components/Test004";
export default {
  name: 'app',
  components: {Test004, Test003, Test002, Test001}
}
</script>

<style>

</style>
