<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
  </section>
</template>

<script>
import { ref, reactive, isReactive, isRef, toRefs } from 'vue';
export default {
  setup() {
    // const uName = ref('Maximilina');
    const uAge = ref(31);
    const user = reactive({
      name: 'Maximilian',
      age: 32
    });
    console.log(uAge, user);
    console.log(uAge.value);
    console.log(user.name, user.age);
    console.log(isRef(uAge.value));
    console.log(isReactive(user.name), user.age);
    console.log(isRef(uAge));
    console.log(isReactive(user));
    // isRef, isReactive - проверяют на реактивность аргумент
    setTimeout(function() {
      user.name = 'Bob';
      user.age = 42;
      // uAge.value = 55;
    }, 2000);
    const userRefs = toRefs(user);
    // toRefs - придает свойствам объекта свойства ref, простого элемента,
    // они получают реактивность и их можно вытащить из объекта userRefs
    return { user: user, userName: userRefs.name, age: userRefs.age };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>