import auth from './Views/auth.vue';
import sighUp from './components/sigh-up.vue';
import createPassword from './components/createPassword.vue';
import sighIn from './components/sigh-in.vue';
import dashboard from './Views/dashboard.vue';
import search from './components/search.vue';

const routes = [
  {
    path: '/auth',
    component: auth,
    children: [
      {
        path: 'sigh-up',
        component: sighUp,
      },
      {
        path: 'create-password',
        component: createPassword,
        beforeEnter: (to, from, next) => {
          if (to.query.available) {
            next();
          }
          next(false);
        },
      },
      {
        path: 'sigh-in',
        component: sighIn,
      },
    ],
  },
  {
    path: '/dashboard',
    component: dashboard,
    children: [
      {
        path: 'search',
        component: search,
      },
    ],
  },
];

export default routes;
