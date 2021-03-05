export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userIdGetter;
    const newCoach = {
      firstName: payload.first,
      lastName: payload.last,
      areas: payload.areas,
      description: payload.desc,
      hourlyRate: payload.rate
    };
    const token = context.rootGetters.tokenGetter; // геттер находиться в другой папаке,
    // и спомощью rootGetters мы его здесь достаем
    const response = await fetch(
      `https://vue-http-demo-d465b-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT', // этот метод или изменяет существующий объект или добюавляет новый, если нет существующего
        body: JSON.stringify(newCoach)
      }
    );
    // const responseData = await response.json();
    if (!response.ok) {
      // error...
    }
    context.commit('registerCoach', {
      ...newCoach,
      id: userId
    });
  },

  async loadCoaches(context, payload) {
    if (!payload.hasRefresh && !context.getters.shouldUpdateGetter) return;
    const response = await fetch(
      'https://vue-http-demo-d465b-default-rtdb.firebaseio.com/coaches.json'
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
