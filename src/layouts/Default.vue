<template>
  <v-app>
    <left-nav-side></left-nav-side>
    <header-side></header-side>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HeaderSide from "./Header";
import LeftNavSide from "./Sidebar";

export default {
  name: "default",
  components: {
    HeaderSide,
    LeftNavSide
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.el-menu {
  border: none;
}
.el-main {
  padding: 0;
}
</style>

