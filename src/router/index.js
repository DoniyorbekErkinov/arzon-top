import { route } from 'quasar/wrappers';
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
import { useCookies } from "../composible/Cookie.js";

const { getCookie } = useCookies();

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
    },
  });

  router.beforeResolve((to, from, next) => {
    const isPublic = to.matched.some((record) => record.meta.public);
    const onlyWhenLoggedOut = to.matched.some(
      (record) => record.meta.onlyWhenLoggedOut
    );
    const loggedIn = getCookie("token");

    if (!loggedIn && !isPublic && to.name !== "login") {
      return next({ path: "/login" });
    }

    if (loggedIn && onlyWhenLoggedOut) {
      return next("/");
    }

    next();
  });

  return router;
});
