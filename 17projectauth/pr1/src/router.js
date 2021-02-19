import { createRouter, createWebHistory } from 'vue-router';

import CouchesList from './pages/couches/CouchesList';
import CouchDetail from './pages/couches/CouchDetail';
import CouchRegistration from './pages/couches/CouchRegistration';
import ContactCouch from './pages/requests/ContactCouch';
import RequestsReceived from './pages/requests/RequestsReceived';
import UserAuth from './pages/auth/UserAuth';
import NotFound from './pages/NotFound';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/couches' },
    { path: '/couches', component: CouchesList },
    {
      path: '/couches/:id',
      component: CouchDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCouch } // couches/c1/contact
      ]
    },
    {
      path: '/register',
      component: CouchRegistration,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: {
        requiresUnauth: true
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthGetter) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthGetter) {
    next('/couches');
  } else {
    next();
  }
});

export default router;
