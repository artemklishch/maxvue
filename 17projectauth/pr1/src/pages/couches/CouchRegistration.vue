<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm';

export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // идем в хранилище, диспатчим екшн и через запятую передаем аргумент в функцию
      // this.$router.push('/couches')
      this.$router.replace('/couches'); // это то же самое, что и this.$router.push('/couches')
      // но имеет отличие - в этом случае мы не можем вернуться наза на страницу формы, если кликнем
      // на стрелку в левом верхнем углу браузера, т.е. путь заменяется, а не добавляется
      // но не всегда так
    }
  }
};
</script>