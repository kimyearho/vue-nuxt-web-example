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
      window.open(
        "https://www.bungie.net/en/OAuth/Authorize?client_id=30428&response_type=code&state=6i1mkLx7923Hp91nzWVeHrzHG4",
        "sigin",
        "top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no"
      );
    }
  }
};
</script>

<style>
.container {
  margin: 0 60px;
}
</style>

