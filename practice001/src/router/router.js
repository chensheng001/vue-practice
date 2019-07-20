import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home';
import News from '../components/News';
import NewsContent from '../components/NewsContent';
import Account from '../components/user/Account';
import AccountAdd from '../components/user/Add';
import AccountList from '../components/user/List';
import MintComponent from '../components/Mint';
import InfiniteComponent from '../components/InfiniteScroll';
import ElementUIComponent from '../components/ElementUi';

const routes = [
  {path: '/home', component: Home,name: 'home'},
  {path: '/news', component: News},
  {path: '/content', component: NewsContent},
  {path: '/content/:id', component: NewsContent,name:'content'},
  {path: '/account', component: Account,children: [{path: 'add',component: AccountAdd},{path: 'list',component: AccountList}]},
  {path: '/mint', component: MintComponent},
  {path: '/infinite', component: InfiniteComponent},
  {path: '/elment', component: ElementUIComponent},
  {path: '*', redirect: '/news'}
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export default router;
