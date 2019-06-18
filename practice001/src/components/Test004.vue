<template>
    <div>
      <h2>{{title}}</h2>
      <hr>
      <input type="text" v-model="todo" @keydown="add($event)">

      <br>
      <h2>未完成</h2>
      <ul>
        <li v-for="(item,key) in list" v-if="!item.checked">
          <input type="checkbox" v-model="item.checked" :onchange="saveList()"> {{item.title}}
          <button @click="minus(key)">删除</button>
        </li>
      </ul>
      <h2>已完成</h2>
      <ul>
        <li v-for="(item,key) in list" v-if="item.checked">
          <input type="checkbox" v-model="item.checked" :onchange="saveList()"> {{item.title}}
          <button @click="minus(key)">删除</button>
        </li>
      </ul>
    </div>
</template>

<script>
    import storage from '../model/storage';
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
        add(e) {
          if (e.keyCode === 13) {
            this.list.push({title: this.todo, checked: false});
            this.todo = '';
            storage.set('list',this.list);
          }
        },
        minus(index) {
          this.list.splice(index,1);
          storage.set('list',this.list);
        },
        saveList(){
          storage.set('list',this.list);
        }
      },
      mounted() {
        var list = storage.get('list');
        if (list) {
          this.list = list;
        }
      }
    }
</script>

<style scoped>

</style>
