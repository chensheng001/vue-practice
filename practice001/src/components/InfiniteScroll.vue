<template>
    <div class="infinite">
      <h3>测试Infinite scroll</h3>

      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="1">
        <li v-for="(item,key) in list">{{key}}---{{ item.title }}</li>
      </ul>
      <div v-if="isShowloading" class="loading">
        加载中<span class="mint-indicator-spin"><div class="mint-spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;"></div></span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "InfiniteScroll",
        data() {
          return {
            loading: false,
            isShowloading: true,
            list: [],
            page: 1
          }
        },
        methods: {
          loadMore() {
            this.loading = true;
            this.isShowloading = true;

            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;

            setTimeout(() => {
              this.$http.get(api).then(res => {
                this.list=this.list.concat(res.body.result);
                ++this.page;
                if (res.body.result.length < 20) {
                  this.loading = true;
                  this.isShowloading = false;
                }else {
                  this.loading = false;
                  this.isShowloading = false;
                }
              }, err=>{
                console.log(err)
              })
            }, 2000);
          }
        }
    }
</script>

<style scoped lang="scss">
  .infinite{
    padding: 0.5rem;
    h3{
      text-align: center;
      margin: 1rem auto;
    }
    ul li{
      line-height: 2;
      color: #999;
    }
    .loading{
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
    }
  }
</style>
