import { route } from 'quasar/wrappers';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

export default route(function (/* { store, ssrContext } */) {

  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  });

  router.beforeEach((to, _, next) => {
    const isAuthenticated = localStorage.getItem('access');
    if (to.path !== '/login' && !isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });

  return router;
});
