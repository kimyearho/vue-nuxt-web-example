<template>
  <div>
    <app-logo />
    <h1 class="title">nuxt-web</h1>
    <h2 class="subtitle">Nuxt.js project</h2>
    <v-row align="center" justify="center">
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn icon large target="_blank" v-on="on">
            <v-icon large>mdi-code-tags</v-icon>
          </v-btn>
        </template>
        <span>Source</span>
      </v-tooltip>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            href="https://codepen.io/johnjleider/pen/MNYLdL"
            target="_blank"
            v-on="on"
          >
            <v-icon large>mdi-codepen</v-icon>
          </v-btn>
        </template>
        <span>Codepen</span>
      </v-tooltip>
    </v-row>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppLogo
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

