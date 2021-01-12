const app = Vue.createApp({
  data() {
    return {
      enteredGoalName: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalName);
      this.enteredGoalName = "";
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
