<template>
    <div>
      <div class="header">
        <router-link to="/home">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/account/list">用户</router-link>
        <router-link to="/mint">mint UI</router-link>
      </div>
      <button v-if="false" v-on:click="goIndex()">通过js跳转路由</button>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "MyRouter",
        methods: {
          goIndex() {
            //this.$router.push({path: 'home'});
            this.$router.push({name: 'content',params: {id: 495}})
          }
        }
    }
</script>

<style scoped lang="scss">
  .header {
    background: #000;
    padding: 2rem;
    text-align: center;
    a {
      margin: 0 1rem;
      color: #fff;
    }
  }
</style>
