<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
export default {
  //   props: ['userName', 'age']
  props: ['firstName', 'lastName', 'thirdName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName + ' ' + props.thirdName;
      // setup принимает props
    });
    console.log(context);
    // context.emit('save-data', 1) // то же, что и this.$emit('save-data', 1)

    const age = inject('userAge');

    onBeforeMount(function() {
      console.log('onBeforeMount');
    });
    onMounted(function() {
      console.log('onMounted');
    });
    onBeforeUpdate(function() {
      console.log('onBeforeUpdate');
    });
    onUpdated(function() {
      console.log('onUpdated');
    });
    onBeforeUnmount(function() {
      console.log('onBeforeUnmount');
    });
    onUnmounted(function() {
      console.log('onUnmounted');
    });

    return {
      userName: uName,
      age: age
    };
  }
  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName + ' ' + this.thirdName;
  //     }
  //   }
};
</script>