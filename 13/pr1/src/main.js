import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');

// const app = new Vue({
//     router
//   }).$mount('#app')
