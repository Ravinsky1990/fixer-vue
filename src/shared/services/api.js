import axios from 'axios';
import { getToken } from './getToken';

const instance = axios.create({
  baseURL: 'https://fixer-api.herokuapp.com',
  headers: { 'Authorization': `JWT ${getToken()}` },
});


export default instance;
