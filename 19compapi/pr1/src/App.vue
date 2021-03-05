<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>-->
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';
export default {
  setup() {
    // this - в данном случае кэто ключевое слово не будет ссылать на объект компонета
    // const uName = ref('Maximilina');
    // const uAge = ref(31); // здесь создается реактивное свойство;
    // // при этом, если данные будут меняться, то такая конструкция будет следить за этим как
    // // в data и обновлять ДОМ
    // // функция ref создает объект
    // // const uName = 'Maximilina'; // так тоже будет работать, но не будет реактивным
    // setTimeout(function() {
    //   // uName = 'Bob';
    //   // так не cработает, даже если переменная буде объявлена через let
    //   uName.value = 'Bob';
    //   uAge.value = 42;
    // }, 2000);
    // return { userName: uName, age: uAge };

    // const user = ref({
    //   name: 'Maximilian',
    //   age: 31
    // });
    // setTimeout(function() {
    //   user.value.name = 'Bob';
    //   user.value.age = 42;
    // }, 2000);
    // return { userName: user.value.name, age: user.value.age, user: user };
    // при передачи группированных данных в объекте правильно передавать целый объект user
    // userName: user.value.name - не сработает так, как нам нужно - данные изменяться, но не передадутся

    const user = reactive({
      name: 'Maximilian',
      age: 31
    });
    // reactive работает только с объектами
    // в этом случае не будет создаваться обертка в виде объекта value
    setTimeout(function() {
      user.name = 'Bob';
      user.age = 42;
    }, 2000);
    return { user: user };
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