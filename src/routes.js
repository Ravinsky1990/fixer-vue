import auth from './Views/auth.vue';
import sighUp from './components/sigh-up.vue';
import createPassword from './components/createPassword.vue';

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
        beforeEnter: (to, from, next)=> {
          if(to.query.available){
            next();
          }
          next(false)
        }
      },
    ],
  },
];

export default routes;
