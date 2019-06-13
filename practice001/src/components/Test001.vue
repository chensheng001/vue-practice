<template>
  <div>
    <h2>{{msg}}</h2>
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
        name: "Test001",
        data () {
          return {
            msg: 'Vue目录结构分析  绑定数据 绑定对象 循环数组渲染数据,Vue绑定属性 绑定Html  绑定class  绑定style',
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

<style scoped>

  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
</style>
