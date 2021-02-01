import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList';
import UsersList from './pages/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './pages/NotFound';
import TeamsFooter from './pages/TeamsFooter';
import UsersFooter from './pages/UsersFooter';

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
      meta: { needsAuth: true }, // это свойство должно быть перед тем, что ниже
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
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
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
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(_, _2, savedPosition) {
    // нижнее подчеркиваени для того, чтоб обозначить аргументы, к-е мы не используем
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
    next();
  } else {
    next();
  }
  next();
  // next({name: 'team-members', params: {teamId: 't2'}}); // для того, чтоб разрешить навигацию или запретить, или перенаправить по другому пути
});
router.afterEach(function(to, from) {
  console.log('Global afeterEach');
  console.log(to, from);
});

export default router;
