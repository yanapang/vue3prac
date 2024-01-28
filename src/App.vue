<template>
  <base-container title="Vuex">
    <the-counter />
    <favorite-value />

    <button @click="addOne">Add 3</button>
    <change-counter />
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseContainer.vue";
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavoriteValue from "@/components/FavoriteValue.vue";

export default {
  components: {
    FavoriteValue,
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },
  methods: {
    /**
     * in case commiting mutations use '$store.commit'
     * or if using actions use '$store.dispatch'
     */
    addOne() {
      // this.$store.commit("increment", {value: 10});
      // this.$store.dispatch("increment", {value: 10});
      this.$store.dispatch({
        type: "increase",
        value: 3,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
