<template>
  <v-app>
    <div v-if="isLogin">
      <left-nav-side></left-nav-side>
      <header-side></header-side>
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>
      <footer-side />
    </div>
    <div v-else>
      <nuxt />
    </div>
  </v-app>
</template>

<script>
import HeaderSide from "./Header";
import LeftNavSide from "./Sidebar";
import FooterSide from "./Footer";
import CommonMixins from "./mixins/commonMixin";

export default {
  name: "default",
  mixins: [CommonMixins],
  components: {
    HeaderSide,
    LeftNavSide,
    FooterSide
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

