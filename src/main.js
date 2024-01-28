import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";

//Router
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: App }],
});

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      //state is automatically considered as default parameter
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {},
  getters: {},
});

const app = createApp(App);

app.use(router);
app.use(store);

// router.isReady().then(() => {
//   app.mount("#app");
// });

app.mount("#app");
