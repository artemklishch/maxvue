import { createRouter, createWebHistory } from 'vue-router';

import CouchesList from './pages/couches/CouchesList';
import CouchDetail from './pages/couches/CouchDetail';
import CouchRegistration from './pages/couches/CouchRegistration';
import ContactCouch from './pages/requests/ContactCouch';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound';

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
    { path: '/register', component: CouchRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});
export default router;
