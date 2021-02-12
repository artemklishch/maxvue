export default {
  finalCounter(state, getters) {
    console.log('getters', getters);
    return state.counter * 3;
  },
  normalizedCounter(_, getters) {
    // _ - это символ, к-й означает, что если мы не будем использовать первый аргумент,
    // то его можно так обозначить, такое соглашение
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  }
};
