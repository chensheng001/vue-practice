<template>
    <div>
      <h3>{{msg}}</h3>
      <button @click="getParent()">通过$parent主动获取父组件信息</button>
      <br>
      <br>
      <button @click="getParent2()">通过属性传递获取父组件信息</button>
      <br>
      <br>
      <button @click="emitSon02()">给非父子组件son02传递值</button>
    </div>
</template>

<script>
    import VueEvent from '../model/VueEvent'
    export default {
        name: "Son",
        data() {
          return {
            msg: '我是子组件son'
          }
        },
        methods: {
          run() {
            alert('我是子组件run方法')
          },
          getParent() {
            //console.log(this.$parent.msg)
            this.$parent.run();
          },
          getParent2() {
            console.log(this.parent.msg)
          },
          emitSon02() {
            VueEvent.$emit('attrSon',this.msg)
          }
        },
        props: {
          'parent': Object
        }
    }
</script>

<style scoped>

</style>
