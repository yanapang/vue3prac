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
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;

      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },
  actions: {
    //asynchronous actions only could be executed in actions.
    increment(context) {
      setTimeout(() => {
        context.commit("increment"); //action commits mutation
      }, 2000);
    },
    increase(context, payload) {
      //if modification is needed, here is where to modify payload before commit it to mutation.
      context.commit("increase", payload);
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

// router.isReady().then(() => {
//   app.mount("#app");
// });

app.mount("#app");
