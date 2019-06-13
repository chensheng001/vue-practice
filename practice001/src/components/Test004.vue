<template>
    <div>
      <h2>{{title}}</h2>
      <hr>
      <input type="text" v-model="todo">
      <button type="button" @click="add()">add</button>

      <br>
      <ul>
        <li v-for="(item,key) in list">
          {{item}}
          <button @click="minus(key)">删除</button>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "Test004",
      data() {
        return {
          title: '07 Vue 事件结合双向数据绑定实现todolist',
          todo: '',
          list: []
        }
      },
      methods: {
        add() {
          this.list.push(this.todo);
          this.todo = '';
        },
        minus(index) {
          this.list.splice(index,1);
        }
      }
    }
</script>

<style scoped>

</style>
