<template>
  <section class="container">
    
  </section>
</template>

<script>

const API_KEY = "AIzaSyDHpgyP8vCtw78G-oYCVEfFCijEfxSJ8b8";

export default {
  name: "Base",
  data() {
    return {
      items: []
    };
  },
  asyncData({ $axios }) {
    const queryParams = {
      part: "snippet",
      q: "audio library",
      type: "playlist,channel",
      maxResults: 50,
      safeSearch: "strict",
      key: API_KEY
    };
    return $axios.get("/search", { params: queryParams }).then(({ data }) => {
      return { items: data.items };
    });
  },
  head() {
    return {
      title: "Base Section",
      meta: [{ hid: "a1", name: "설명", content: "내용" }]
    };
  },
  mounted() {
    this.$log.info("mounted!");
  }
};
</script>

<style>
.container {
  margin: 0 60px;
}
</style>

