<template>
    <div class="detail">
      <h3>{{content.title}}</h3>
      <div v-html="content.content"></div>
    </div>
</template>

<script>
    export default {
        name: "NewsContent",
        data() {
          return {
            id: '',
            content: ''
          }
        },
        methods: {
          requestData(id) {
            var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + id;
            this.$http.get(api).then((res)=>{
              console.log(res);
              this.content = res.body.result[0];
            }, (err)=>{
              console.log(err)
            })
          }
        },
        mounted() {
          this.id = this.$route.params.id;
          this.requestData(this.id)


          /* get传值*/
          /*console.log(this.$route)
          this.id = this.$route.query.id;*/
        }
    }
</script>

<style lang="scss" scoped>
  .detail{
    padding: 0.5rem 1rem;
    line-height: 2;
    p {
      line-height: 2;
    }
    img {
      max-width: 100%;
    }
  }
</style>
