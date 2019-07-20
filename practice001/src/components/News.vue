<template>
    <div class="news">
      <h3>{{msg}}--{{this.$store.state.count}}</h3>

      <ul>
        <li v-for="(item,key) in list">
          <router-link :to="'/content/' +item.aid">{{item.title}}</router-link>
        </li>
      </ul>

      <hr>
      <h4>get动态路由传值</h4>
      <ul>
        <li v-for="(item,key) in list2">
          <router-link :to="'/content?id=' +key">{{item}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    import store from '../vuex/store';
    export default {
        name: "News",
        data() {
          return {
            msg: '我是个新闻组件',
            list: ['111111111','22222222222','3333333'],
            list2: ['aaaaa','bbbbbb','cccc']
          }
        },
        store,
        methods: {
          requestData() {
              var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
              this.$http.get(api).then((res)=>{
                this.list = res.body.result;
                this.$store.commit('setNewsData',res.body.result);
              }, (err)=>{
                console.log(err)
              })
          }
        },
        mounted() {
          const list = this.$store.state.newsComponentList;
          if (list.length) {
            this.list = list;
          }else {
            this.requestData();
          }
        }
    }
</script>

<style scoped lang="scss">
  .news {
    padding: 0.5rem 1rem;
    ul li {
      line-height: 2;
      font-size: 1.4rem;
      list-style: none;
    }
  }
</style>
