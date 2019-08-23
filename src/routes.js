import auth from './Views/auth.vue';
import signUp from './components/sign-up.vue';
import createPassword from './components/create-password.vue';
import signIn from './components/sign-in.vue';
import dashboard from './Views/dashboard.vue';
import search from './components/search.vue';

const routes = [
  {
    path: '/auth',
    component: auth,
    children: [
      {
        path: 'sign-up',
        component: signUp,
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
        path: 'sign-in',
        component: signIn,
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
