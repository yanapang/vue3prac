<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>
<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters["users/userIsAuthenticated"];
    },
  },
  methods: {
    login() {
      this.$store.dispatch("users/login");
    },
    logout() {
      this.$store.dispatch("users/logout");
    },
  },
};
</script>

<style scoped></style>
