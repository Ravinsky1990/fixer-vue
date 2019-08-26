/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { getToken } from './getToken';

class Api {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  }

  setHeader() {
    axios.defaults.headers.common.Authorization = `JWT ${getToken()}`;
  }

  removeHeader() {
    axios.defaults.headers.common = {};
  }

  get(resource) {
    return axios.get(resource);
  }

  post(resource, data) {
    return axios.post(resource, data);
  }

  put(resource, data) {
    return axios.put(resource, data);
  }

  delete(resource) {
    return axios.delete(resource);
  }
}

const FixerApi = new Api();

FixerApi.init('https://fixer-api.herokuapp.com/');

export default FixerApi;
