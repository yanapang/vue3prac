<template>
  <base-container title="Vuex">
    <the-counter />
    <button @click="addOne">Add 2</button>
    <change-counter />
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseContainer.vue";
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";

export default {
  components: {
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },
  methods: {
    addOne() {
      // this.$store.commit("increment");
      this.$store.commit({
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
