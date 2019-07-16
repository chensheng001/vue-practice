<template>
    <div id="account">
      <div class="left">
        <ul>
          <li><router-link to="/account/list">用户列表</router-link></li>
          <li><router-link to="/account/add">添加用户</router-link></li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped lang="scss">

  #account{
    font-size: 1.4rem;
    display: flex;
    .left {
      width: 10rem;
      border: 1px solid #ccc;
      line-height: 2;
      padding: 1rem;
    }
    .right {
      border: 1px solid;
      flex: 1;
    }
  }
</style>
