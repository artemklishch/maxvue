<template>
  <button v-if="getIsLogged" @click="logOut">Logout</button>
  <button v-else @click="logIn">Login</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getIsLogged'])
  },
  methods: {
    ...mapActions(['logIn', 'logOut'])
  }
};
</script>