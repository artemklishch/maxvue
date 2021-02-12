import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true, // не дает работать этому модулю, если не использовать дополнительные настройки
  // в данном случае для этого модуля установлен namespaced со значением numbers
  // как это мы обозначили в объекте конфигурации ниже
  state() {
    return {
      counter: 0
    };
  },
  mutations,
  getters,
  actions
};
