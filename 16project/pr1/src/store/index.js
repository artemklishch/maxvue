import { createStore } from 'vuex';
import coachesModule from './modules/couches/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: {
    userIdGetter(state) {
      return state.userId;
    }
  }
});

export default store;
