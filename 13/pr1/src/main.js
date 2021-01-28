import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers } // если писать динамический раут как здесь, то он должен быть перед
    // '/teams/new', т.к. может быть ошибка
    // { path: '/teams/new' },
  ],
  linkActiveClass: 'active' // переименовываем класс активной ссылки при раутинге
  //- теперь это не "router-link-active", а "active"
});

const app = createApp(App);
app.use(router);
app.mount('#app');

// const app = new Vue({
//     router
//   }).$mount('#app')
