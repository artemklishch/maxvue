<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && !results?.length">
        No experience found. Start adding surveys
      </p>
      <ul v-else>
        <!-- <ul v-else-if="!isLoading && results?.length > 0"> -->
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch('https://vue-http-demo-d465b-default-rtdb.firebaseio.com/surveys.json')
        .then(function (response) {
          if (response.ok) return response.json();
        })
        .then((data) => {
          // this.results = Object.entries(data).map((d) => {
          //   const id = d[0];
          //   const { name, rating } = d[1];
          //   return { id, name, rating };
          // });
          for (const id in data) {
            this.results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.error('Failed to fetch certain data: ', err.message);
          this.isLoading = false;
          this.error = 'Failed to fetch data. Please, try again later';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>