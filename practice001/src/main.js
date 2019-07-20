import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import Mint from 'mint-ui';
import ElementUI from 'element-ui';

import './assets/css/basic.scss';
import 'mint-ui/lib/style.css';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router';



Vue.use(VueResource);
Vue.use(Mint);
/*Vue.use(ElementUI);*/




new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
