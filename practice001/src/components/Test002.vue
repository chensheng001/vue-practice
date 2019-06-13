<template>
    <div>
      <h2>{{title}}</h2>
      <div ref="msgRef">{{msg}}</div>
      <input ref="inputInfo" type="text" v-model="msg">
      <button v-on:click="getInputMsg()">获取input值</button>
      <button v-on:click="setInputMsg()">设置input值</button>
      <button v-on:click="setStyle()">通过ref获取dom节点设置style</button>
    </div>
</template>

<script>
    export default {
        name: "Test002",
        data() {
          return {
            title: '05 Vue 及双向数据绑定 Vue事件介绍 以及Vue中的ref获取dom节点',
            msg: '我是input值'
          }
        },
        methods: {
          getInputMsg() {
            alert(this.msg);
            console.log(this.$refs.inputInfo.value)
          },
          setInputMsg() {
            this.msg = '这是设置后的msg';
          },
          setStyle() {
            this.$refs.msgRef.style.color = 'blue';
          }
        }
    }
</script>

<style scoped>

</style>
