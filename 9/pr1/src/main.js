import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App);

app.component("base-badge", BaseBadge); // глобальная регистрация компоненты, а внутри компонент делается локальная регистрация
app.component("base-card", BaseCard); 

app.mount("#app");
