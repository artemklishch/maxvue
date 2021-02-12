<template>
  <!-- <button @click="addOne">Add 2</button> -->
  <button @click="inc">Add 2</button>
  <button @click="incr({ value: 10 })">Increase</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // ...mapActions(['increment', 'increase'])
    ...mapActions('numbers', {
      inc: 'increment',
      incr: 'increase'
    }) // такой же синтаксиси возможен для мапгеттеров
    // addOne() {
    //   //   this.$store.state.counter++;
    //   // this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // }
  }
};
</script>