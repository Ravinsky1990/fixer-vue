import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    query: {
      category: '',
      text: '',
      sort: 'price',
    },
  },
  mutations: {
    addUsersToStore(state, users) {
      state.users = [...users];
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios.get('https://fixer-api.herokuapp.com/users')
        .then((res) => {
          commit('addUsersToStore', res.data.users);
        });
    },
  },
});
