<template>
  <div class="container">
    <div class="block" :class="{ ainmate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <!-- <transition enter-to-class="some-class" enter-active-class="..."> -->
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="!usersAreVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>
    </transition>
  </div>
  <!-- <transition name="modal"> -->
  <!-- это будет работать только по отношению к одному вложенному корневому элементу -->
  <!-- в данном случае работать не будет, т.к. вложенный компонент имеет два прямых потомка -->
  <!-- <base-modal @close="hideDialog" v-if="dialogIsVisible"> -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <!-- </transition> -->
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter()');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave()');
      console.log(el);
    },
    enter(el){
      console.log('enter()')
      console.log(el)
    },
    afterEnter(el){
      console.log('afterEnter()')
      console.log(el)
    },
    leave(el){
      console.log('leave()')
      console.log(el)
    },
    afterLeave(el){
      console.log('afterLeave()')
      console.log(el)
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    }
  }
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.ainmate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* .v-enter-from { */
.para-enter-from {
  /* para это наш кастомный префикс к классу компонента transition, префикс v - дефолтный и будет рапространяться на все случаи исползования компоненты */
  /* opacity: 0;
  transform: translateY(-30px); */
}
/* .v-enter-active { */
.para-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide-scale 2s ease-out;
}
/* .v-enter-to { */
.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}
/* .v-leave-from { */
.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}
/* .v-leave-active { */
.para-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide-scale 0.3s ease-out;
}
/* .v-leave-to { */
.para-leave-to {
  /* opacity: 0;
  transform: translateY(30px); */
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active,
.fade-button-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX() scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
@keyframes slide-fade {
  0% {
    transform: translateX() scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
