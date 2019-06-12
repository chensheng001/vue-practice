<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <ul>
      <li :class="{'red': key===1,'blue': key===2}" v-for="(item,key) in list">{{key}}------{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="item in list2">
        {{item.type}}
        <ol>
          <li v-for="it in item.content">
            {{it.name}}
          </li>
        </ol>
      </li>
    </ul>
    <hr>
    <span :style="{'border': '1px solid red','background':'#ccc'}" :class="{'red': flag}" v-text="name" :title="title"></span>
    <div v-html="h"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: ['111','222','333'],
      list2: [
        {
          type: 'aaa',
          content: [
            {'name': 'hahaha'},
            {'name': 'hehehe'}
          ]
        },
        {
          type: 'bbb',
          content: [
            {'name': 'heiheihei'},
            {'name': 'wangwangwang'}
          ]
        }
      ],
      title: '我是个title',
      name: 'v-text绑定数据',
      h: '<h2>我是个h2</h2>',
      flag: true
    }
  }
}
</script>

<style>

  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
</style>
