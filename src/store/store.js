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
    sighUpObj: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
    },
  },
  mutations: {
    addUsersToStore(state, users) {
      state.users = [...users];
    },
    submitSighUpForm(state, FormPayload) {
      state.sighUpObj = { ...FormPayload };
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios.get()
        .then((res) => {
          commit('addUsersToStore', res.data.users);
        });
    },
  },
});
