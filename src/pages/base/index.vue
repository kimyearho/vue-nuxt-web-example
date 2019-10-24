<template>
  <v-card class="d-flex">
    <v-btn color="primary" @click="signin">Sign in</v-btn>
  </v-card>
</template>

<script>
import commonMixin from "@/layouts/mixins/commonMixin";

export default {
  name: "Base",
  mixins: [commonMixin],
  data() {
    return {
      items: []
    };
  },
  asyncData(context) {},
  fetch(context) {},
  head() {
    return {
      title: "Base Section",
      meta: [{ hid: "a1", name: "설명", content: "내용" }]
    };
  },
  mounted() {
    this.$log.info("mounted!");
  },
  methods: {
    signin() {
      this.$auth.loginWith('google')
    }
  }
};
</script>

<style>
.container {
  margin: 0 60px;
}
</style>

