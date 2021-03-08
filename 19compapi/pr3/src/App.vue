<template>
  <section class="container">
    <!-- <user-data :user-name="userName" :age="age"></user-data> -->
    <user-data :first-name="firstName" :last-name="lastName" :third-name="thirdName" :age="age"></user-data>
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>-->
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>-->
    <!-- <button @click="user.age = 34">Change the Age</button> -->
    <button @click="setNewAge">Change the Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="text" placeholder="Third Name" ref="lastNameInputRef" />
      <button @click="setLastNameInput">Set Last Name</button>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />-->
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch, provide } from 'vue';
import UserData from './components/UserData';
export default {
  components: {
    UserData
  },
  setup() {
    const firstname = ref('');
    const lastname = ref('');
    const thirdname = ref('');
    const lastNameInputRef = ref(null);
    // const uName = ref('Maximilian');
    const uAge = ref(30);
    const user = reactive({
      name: 'Maximilian',
      age: 32
    });
    function setNewAge() {
      user.age = 35;
      uAge.value = 40;
    }
    function setFirstName(e) {
      firstname.value = e.target.value;
    }
    function setLastName(e) {
      lastname.value = e.target.value;
    }
    const uName = computed(function() {
      return firstname.value + ' ' + lastname.value + ' ' + thirdname.value;
    });
    // uName.value = '56' // такое писать нельзя, эти данные только для чтения
    // watch(uAge, function(newValue, oldValue) {
    //   console.log('Old age: ' + oldValue);
    //   console.log('New age: ' + newValue);
    // });
    watch([uAge, uName], function(newValue, oldValue) {
      console.log('Old age: ' + oldValue[0]);
      console.log('New age: ' + newValue[0]);
    }); // в этому случае аргументы колбека выводят новео и старое всех значений, что переданы в массиве
    function setLastNameInput() {
      thirdname.value = lastNameInputRef.value.value;
    }
    provide('userAge', uAge);
    return {
      user: user,
      setNewAge: setNewAge,
      userName: uName, // computed передаем как есть, без .value
      age: uAge,
      setFirstName: setFirstName,
      setLastName: setLastName,
      firstName: firstname,
      lastName: lastname,
      setLastNameInput: setLastNameInput,
      lastNameInputRef: lastNameInputRef,
      thirdName: thirdname
    };
  }

  // data() {
  //   return {
  //     userName: 'Maximilian',
  //      age: 31,
  //    firstName: '',
  //    lastName: ''
  //   };
  // },
  // methods:{
  //   setNewAge(){
  //     this.age = 32
  //   }
  // }
  // computed:{
  //    userName(){
  //      return this.firstName + ' ' + this.lastName;
  //    }
  // }
  // watch:{
  //   age(val){
  //     console.log(val)
  //   }
  // }
  // provide(){
  //   return {
  //     age: this.age
  //   }
  // }
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