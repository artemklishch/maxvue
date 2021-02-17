export default {
  async contactCoach(context, payload) {
    const request = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://vue-http-demo-d465b-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(request)
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }
    request.id = responseData.name;
    request.coachId = payload.coachId;
    context.commit('addRequest', request);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userIdGetter;
    const response = await fetch(
      `https://vue-http-demo-d465b-default-rtdb.firebaseio.com/requests/${coachId}.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch request data.'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};
