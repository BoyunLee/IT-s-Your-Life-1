// src/main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// src/main.js
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
