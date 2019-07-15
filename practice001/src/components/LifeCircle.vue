<template>
    <div>
      --------------{{msg}}
      <button type="button" @click="updateMsg()">update msg</button>
    </div>
</template>

<script>
    export default {
        name: "LifeCircle",
        data() {
          return {
            msg: '这是个生命周期钩子组件'
          }
        },
        methods: {
          updateMsg () {
            this.msg = '这是改变后的msg';
          }
        },
        beforeCreate() {
          console.log('01---beforeCreate');
        },
        created() {
          console.log('02---created');
        },
        beforeMount() {
          console.log('03---beforeMount');
        },
        mounted() {
          console.log('04---mounted');
        },
        beforeUpdate() {
          console.log('05---beforeUpdate');
        },
        updated() {
          console.log('06---updated');
        },
        beforeDestroy() {
          console.log('07---beforeDestroy');
        },
        destroyed() {
          console.log('08---destroyed');
        }
    }
</script>

<style scoped>

</style>
