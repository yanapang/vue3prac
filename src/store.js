import { createStore } from "vuex";

const counterModule = {
  namespaced: true,
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
};

const UserModule = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
};

const store = createStore({
  modules: {
    //connect store modules in separate object.
    numbers: counterModule,
    users: UserModule,
  },
});

export default store;
