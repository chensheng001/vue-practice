import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';

import './assets/css/basic.scss';
import 'mint-ui/lib/style.css'

import Home from './components/Home';
import News from './components/News';
import NewsContent from './components/NewsContent';
import Account from './components/user/Account';
import AccountAdd from './components/user/Add';
import AccountList from './components/user/List';
import MintComponent from './components/Mint';
import InfiniteComponent from './components/InfiniteScroll';

const routes = [
  {path: '/home', component: Home,name: 'home'},
  {path: '/news', component: News},
  {path: '/content', component: NewsContent},
  {path: '/content/:id', component: NewsContent,name:'content'},
  {path: '/account', component: Account,children: [{path: 'add',component: AccountAdd},{path: 'list',component: AccountList}]},
  {path: '/mint', component: MintComponent},
  {path: '/infinite', component: InfiniteComponent},
  {path: '*', redirect: '/news'}
];

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Mint);


const router = new VueRouter({
  mode: 'history', /*hash模式*/
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
