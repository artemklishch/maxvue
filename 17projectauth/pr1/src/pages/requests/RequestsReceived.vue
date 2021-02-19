<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handelError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :email="request.userEmail"
            :message="request.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any request yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem';

export default {
  components: {
    RequestItem
  },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requestsGetter'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequestsGetter'];
    }
  },
  created() {
    this.fetchRequests();
  },
  methods: {
    async fetchRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (err) {
        this.error = err.message || 'Something failed';
      }
      this.isLoading = false;
    },
    handelError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>