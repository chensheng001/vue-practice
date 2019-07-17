<template>
    <div class="mint">
      <h3>测试mint UI</h3>

      <div class="page-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="slide1">1</mt-swipe-item>
          <mt-swipe-item class="slide2">2</mt-swipe-item>
          <mt-swipe-item class="slide3">3</mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="margin">
        <mt-button @click.native="sheetVisible = true" size="large" type="primary">点击上传头像</mt-button>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      </div>

      <div class="margin">
        <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
      </div>

      <div class="margin">
        <mt-button @click.native="getMore" size="large" plain>测试滚动加载更多</mt-button>
      </div>

      <mt-index-list height="400">
        <mt-index-section index="A">
          <mt-cell title="Aaron"></mt-cell>
          <mt-cell title="Alden"></mt-cell>
          <mt-cell title="Austin"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="Z">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>
      </mt-index-list>

      <div class="margin">
        <mt-range
          v-model="rangeValue"
          :min="10"
          :max="90"
          :step="10"
          :bar-height="5">
        </mt-range>
      </div>
      <div class="margin">
        <mt-button size="large" @click.native="getData()" type="primary">确定</mt-button>
      </div>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    export default {
        name: "Mint",
        data() {
          return {
            rangeValue: 20,
            sheetVisible: false,
            actions: [],
          }
        },
        methods: {
          getData () {
            alert(this.rangeValue)
          },
          takePhoto() {
            alert('taking photo');
          },

          openAlbum() {
            alert('opening album');
          },
          openConfirm() {
            MessageBox.confirm('确定执行此操作?', '提示').then(()=>{
              alert('执行')
            });
          },
          getMore() {
            this.$router.push({path: 'infinite'});
          }
        },
        mounted() {
          this.actions = [{
            name: '拍照',
            method: this.takePhoto
          }, {
            name: '从相册中选择',
            method: this.openAlbum
          }];
        }
    }
</script>

<style scoped lang="scss">

  .mint {
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    h3{
      text-align: center;
      margin: 1rem auto;
    }
    .margin{
      margin: 1rem auto;
    }
  }

  .page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .page-swipe .mint-swipe-item {
    line-height: 200px;
  }
  .page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
  .page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }
</style>
