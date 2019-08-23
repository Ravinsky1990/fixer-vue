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
      keyword: '',
      sort: 'price',
    },
    signUpObj: {
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
    submitSignUpForm(state, FormPayload) {
      state.sighUpObj = { ...FormPayload };
    },
    clearSignUpFormInfo(state) {
      state.sighUpObj = {};
    },
    setQuery(state, queryPayload) {
      state.query = { ...state.query, [queryPayload.type]: queryPayload.value };
    },
  },
  actions: {
    fetchUsers({ commit }, filters) {
    },
  },
});
