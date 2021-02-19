export default {
  requestsGetter(state, _1, _2, rootGetters) {
    const coachId = rootGetters.userIdGetter;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequestsGetter(_0, getters) {
    return getters.requestsGetter && getters.requestsGetter.length > 0;
  }
};
