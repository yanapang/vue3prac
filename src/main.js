import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import store from "./store";

//Router
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: App }],
});

const app = createApp(App);

app.use(router);
app.use(store);

// router.isReady().then(() => {
//   app.mount("#app");
// });

app.mount("#app");
