export default {
  coachesGetter(state) {
    return state.coaches;
  },
  hasCoachesGetter(state) {
    return state.coaches && state.coaches.length;
  },
  // isCoachGetter(state, getters, rootState, rootGetters) {
  isCoachGetter(_, getters, _2, rootGetters) {
    // геттер принмает такиe аргументы, как указано выше
    const coaches = getters.coachesGetter;
    const userId = rootGetters.userIdGetter;
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdateGetter(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) return true;
    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetch) / 1000 > 60;
  }
};
