<template>
  <div>
    <h1>ManageGoals here</h1>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body">
      <!-- позволяет размещать вложенный элемент на выходе в разметке там, где нам нужно, например, не в этой разметке, а в корне разметки  -->
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please, enter at least a few characters...</p>
        <button @click="confirmError">Okey</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (!enteredValue) {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>