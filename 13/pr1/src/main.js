import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './components/nav/NotFound';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersFooter from './components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // redirect делает перенаправление на другой раут
    // но в данном примере эту строку можно заменить на добавление в раут
    // '/teams' свойства alias, как показан ниже
    // однако, alias не является перенаправлением, раут не изменяет, это как псевдоним для раута или дополнительное обозначение раута
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      }, // это для того, чтоб вставлять в разные router-view в одном файле
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        } // вложенный раут отличается тем,
        // что не попадает в router-view куда попадают все корневые рауты в массиве routes
        // необходимо добавить router-view в компонент, к-й родитель для вложеного раута
        // в даннгом примере - в компонент TeamsList
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    // { path: '/teams/:teamId', component: TeamMembers, props: true }, // если писать динамический раут как здесь, то он должен быть перед
    // '/teams/new', т.к. может быть ошибка
    // { path: '/teams/new' },
    // props: true позволяет передавать парамс раутинга в пропсы
    { path: '/:notFound(.*)', component: NotFound }
    // { path: '/:notFound(.*)', redirect: '/teams' }, // путь /:notFound(.*) означает, что если пользователь ввел в строке
    // неизветсный программе раут после "/", то сработает этот раут (/:notFound(.*))
  ],
  linkActiveClass: 'active', // переименовываем класс активной ссылки при раутинге
  //- теперь это не "router-link-active", а "active"
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');

// const app = new Vue({
//     router
//   }).$mount('#app')
