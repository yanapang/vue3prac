export default {
  increment(state) {
    //state is automatically considered as default parameter
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
