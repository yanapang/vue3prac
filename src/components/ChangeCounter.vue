<template>
  <button @click="addOne">Add 3</button>
</template>
<script>
export default {
  methods: {
    addOne() {
      this.$store.commit("increase", { value: 3 });
    },
  },
};
</script>

<style scoped></style>
