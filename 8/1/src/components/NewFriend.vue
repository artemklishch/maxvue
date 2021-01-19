<template>
  <form @submit.prevent="onAddNewFriend">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="tel">Phone</label>
      <input type="tel" id="tel" v-model="phone" />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emit: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    onAddNewFriend() {
      const id = Math.random().toFixed(20);
      const newfriend = {
        id,
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      this.$emit("add-contact", newfriend);
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>