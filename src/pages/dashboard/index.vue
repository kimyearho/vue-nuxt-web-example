<template>
  <div>
    <div v-if="isLogin">
      <app-logo />
      <h1 class="title">nuxt-web</h1>
      <h2 class="subtitle">Nuxt.js project</h2>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import CommonMixins from "~/layouts/mixins/commonMixin";

export default {
  name: "Dashboard",
  mixins: [CommonMixins],
  data() {
    return {};
  },
  components: {
    AppLogo
  },
  mounted() {
    if (!this.isLogin) {
      location.href = "/auth/login";
    }
  },
  methods: {
    routerBase() {
      this.$router.push("/base");
    }
  }
};
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;

  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>

