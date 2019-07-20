import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1,
  newsComponentList: []
};

const mutations = {
  incCount() {
    ++state.count;
  },
  setNewsData(state,data) {
    state.newsComponentList = data;
  }
};

const getters = {
  computedCount: (state) => {
    return state.count *2;
  }
};

const actions = {
  incMutationCount: (context) => {
    context.commit('incCount');
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

export default store;
