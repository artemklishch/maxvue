<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detaileAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detaileAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
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
};
</script>
