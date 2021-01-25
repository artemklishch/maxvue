<template>
  <!-- <ul>
    <li :class="{ active: activeOption === 'poop' }">
      <button type="button" @click="activate('poop')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'avarage' }">
      <button type="button" @click="activate('avarage')">Avarage</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul> -->

    <ul>
    <li :class="{ active: modelValue === 'poop' }">
      <button type="button" @click="activate('poop')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'avarage' }">
      <button type="button" @click="activate('avarage')">Avarage</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], // здесь пропс мы называем по своему усмотрению,
  // на выходе в директиве v-model переменная rating
  emit: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //     // activeOption: null, - тоже работает
  //   };
  // },
  // comnputed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },
  updated() {
    console.log('+++++++', this.modelValue);
  },
  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  padding: 1rem;
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  border: none;
  font: inherit;
  background: transparent;
  cursor: pointer;
}
</style>