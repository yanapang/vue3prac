export default {
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
};
