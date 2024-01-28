//where main store creation logic lies
import userMutations from "./mutations";
import userActions from "./actions";
import userGetters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: userMutations,
  actions: userActions,
  getters: userGetters,
};
