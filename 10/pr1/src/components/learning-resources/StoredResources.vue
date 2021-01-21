<template>
  <ul>
    <learning-resources
      v-for="resource in resources"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
      :id="resource.id"
      :key="resource"
    ></learning-resources>
  </ul>
</template>

<script>
import LearningResources from './LearningResource';

export default {
  components: {
    LearningResources,
  },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>