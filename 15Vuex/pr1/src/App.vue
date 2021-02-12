<template>
  <base-container v-if="getIsLogged" title="Vuex">
    <counter></counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
    <favourite-value></favourite-value>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import Counter from './components/Counter';
import ChangeCounter from './components/ChangeCounter';
import FavouriteValue from './components/FavouriteValue';
import UserAuth from './components/UserAuth';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    Counter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  computed: {
    ...mapGetters(['getIsLogged'])
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>