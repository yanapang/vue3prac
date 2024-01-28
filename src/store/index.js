//where main store creation logic lies
import { createStore } from "vuex";

import counterModule from "./counter/index";
import userModule from "./user/index";

const store = createStore({
  modules: {
    //connect store modules in separate object.
    numbers: counterModule,
    users: userModule,
  },
});

export default store;
