<template>
  <el-container>
    <left-nav-side></left-nav-side>
    <el-container>
      <el-main class="app-main">
        <header-side></header-side>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
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

