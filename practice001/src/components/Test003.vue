<template>
    <div>
      <h2>{{title}}</h2>
      <div>{{msg}}</div>
      <button @click="getMsg('sss')">getMsg</button>
      <button v-on:click="setMsg()">setMsg</button>
      <button @click="eventFn($event)">事件对象</button>
      <hr>
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Test003",
        data() {
          return {
            title: '06 Vue事件 定义方法 执行方法  获取数据 改变数据 执行方法传值 以及事件对象',
            msg: 'msg',
            list: []
          }
        },
        methods: {
          getMsg(param){
            console.log(this.msg);
            console.log(param)
          },
          setMsg() {
            for(let i = 1; i < 11; i++) {
              this.list.push('数据'+ i);
            }
          },
          eventFn(e) {
            console.log(e.srcElement) //获取dom节点对象
            e.srcElement.style.background = '#ccc';
          }
        }
    }
</script>

<style scoped>

</style>
