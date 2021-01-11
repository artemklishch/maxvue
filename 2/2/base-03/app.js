const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmedName: "",
      fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 10) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value, oldValue) {
    //   console.log(oldValue);
    //   // this.fullname = this.name + " " + "Klishch";
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   this.fullname = this.name + " " + value;
    // },
  },
  computed: {
    outputFullname() {
      if (!this.name) return "";
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // setName() {
    //   this.name = this.name;
    // },
    submitForm() {
      alert("Submitted");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
