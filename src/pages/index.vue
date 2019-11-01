<template>
  <div>
    <dash-board />
  </div>
</template>

<script>
import DashBoard from "./dashboard";

export default {
  name: "Index",
  // middleware: "auth",
  components: {
    DashBoard
  },
  mounted() {
    const token = localStorage.getItem('auth._token.google');
    console.log(token)
  }
};
</script>

<style lang="scss" scoped>
</style>