import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'vue-select/dist/vue-select.css';
import { store } from './store/store';
import routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
