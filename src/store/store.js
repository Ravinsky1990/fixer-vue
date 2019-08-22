/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
// import api from '../shared/services/api';


Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
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
    clearSighUpFormInfo(state) {
      state.sighUpObj = {};
    },
    setQuery(state, queryPayload) {
      const clearVal = queryPayload.value
        .split('')
        .filter(chanck => chanck !== ' ')
        .join('');
      state.query = { ...state.query, [queryPayload.type]: clearVal };
    },
  },
  actions: {
    fetchUsers({ commit }, filters) {
    },
  },
});
