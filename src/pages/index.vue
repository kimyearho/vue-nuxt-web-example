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
  }
};
</script>

<style lang="scss" scoped>
</style>