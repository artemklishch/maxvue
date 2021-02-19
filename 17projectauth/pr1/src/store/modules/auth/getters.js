export default {
  userIdGetter(state) {
    return state.userId;
  },
  tokenGetter(state) {
    return state.token;
  },
  isAuthGetter(state) {
    return !!state.token;
  },
  didAutoLogoutGetter(state) {
    return state.didAutoLogout;
  }
};
