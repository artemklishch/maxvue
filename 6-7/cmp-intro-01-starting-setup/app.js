const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julia",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">
                {{ detaileAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detaileAreVisible">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
    `,
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      detaileAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detaileAreVisible = !this.detaileAreVisible;
    },
  },
});

app.mount("#app");
