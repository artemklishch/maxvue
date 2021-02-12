export default {
  increment(state) {
    state.counter += 2;
  },
  increase(state, payload) {
    console.log('increasestate', state);
    state.counter = state.counter + payload.value;
  }
};
