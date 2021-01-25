<template>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{ invalid: userNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateInput"
      />
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input
        id="age"
        name="age"
        type="number"
        v-model.number="userAge"
        ref="userAge"
      />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
        <!-- здесь referrer можно присваивать значения value -->
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="news"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="how"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="how"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="how"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <rating-control v-model="rating"></rating-control>
      <!-- 
        Здесь директива  v-model="rating" 
        заменяет функционал:
        :model-value=""
        @update:modelValue=""
        Директива v-model ловит событие update:modelValue, эмитируемое
        в колпоненте rating-control и присваивает переменной rating соответствующее значение
       -->
    </div>
    <div class="form-control">
      <input
        type="checkbox"
        id="confirm-terms"
        name="confirm-terms"
        v-model="confirmTerms"
      />
      <label for="confirm-terms">I agree with terms</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl';

export default {
  components: {
    RatingControl,
  },
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'google',
      interest: [], // чтоб такое работало, необходимо в инпутах обязательно вставлять атрибут value с разными значениями и мы получим значение value
      how: '',
      confirmTerms: false,
      userNameValidity: 'pending',
      rating: null,
    };
  },
  methods: {
    submitForm() {
      console.log('Username: ', this.userName);
      console.log('User age:');
      console.log(this.userAge);
      console.log(32);
      console.log(this.$refs.userAge.value);
      console.log('Referrer: ', this.referrer);

      console.log('Interets: ', this.interest);
      console.log('How: ', this.how);
      console.log('Confirm: ', this.confirmTerms);
      console.log('Rating: ', this.rating);

      this.userName = '';
      this.userAge = null;
      this.referrer = 'google';
      this.interest = null;
      this.how = null;
      this.confirmTerms = false;
      this.rating = null;
    },
    validateInput() {
      if (!this.userName) {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label {
  color: red;
}
</style>