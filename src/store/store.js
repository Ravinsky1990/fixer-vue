/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../shared/services/api';


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
    errorsMsg: '',
  },
  mutations: {
    addUsersToStore(state, users) {
      state.users = [...users];
    },
    submitSignUpForm(state, FormPayload) {
      state.signUpObj = { ...FormPayload };
    },
    clearSignUpFormInfo(state) {
      state.signUpObj = {};
    },
    setQuery(state, queryPayload) {
      state.query = { ...state.query, [queryPayload.type]: queryPayload.value };
    },
    setErrorMsg(state, msg) {
      state.errorsMsg = msg;
    },
  },
  actions: {
    fetchUsers({ commit, state }) {
      Api.setHeader();
      Api.post('/api/accounts/users', state.query)
        .then((res) => {
          commit('addUsersToStore', res.data.users);
        })
        .catch((err) => {
          commit('setErrorMsg', err.response.data.error);
        });
    },
  },
});
