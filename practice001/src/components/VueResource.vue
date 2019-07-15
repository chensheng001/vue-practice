<template>
    <div>
      <h2>{{msg}}</h2>
      <button @click="getData()">getData</button>
      <ul>
        <li v-for="item in list">
          {{item.Name}}---{{item.Url}}---{{item.Country}}
        </li>
      </ul>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "VueResource",
        data() {
          return {
            msg: '12 Vue vue-resource 请求数据',
            list: []
          }
        },
        methods: {
          getData() {

            // vue 官方请求数据方法vue-resource
            let apiPath = '/src/assets/testData.json';
            /*this.$http.get(apiPath).then((res) => {
              console.log(res);
              this.list = res.data.sites;
            }, (err) => {

            })*/

            //第三方插件axios
            Axios.get(apiPath).then(res => {
              console.log(res)
              this.list = res.data.sites;
            }).catch(err => {
              console.log(err);
            })
          }
        },
        mounted() {
          this.getData();
        }
    }
</script>

<style scoped>

</style>
