<template>
  <section class="container">
    <h1>SECTION BASE</h1>
  </section>
</template>

<script>
export default {
  name: "Base",
  data() {
    return {};
  },
  middleware: "middlewareExample",
  asyncData(context) {
    console.log("context | ", context);
    return { name: "World" };
  },
  fetch() {
    console.log('fetch |')
  },
  head() {
    this.$log.info('Base Section | ')
    return {
      title: "Base Section",
      meta: [{ hid: "a1", name: "설명", content: "내용" }]
    };
  },
  mounted() {
    this.$log.info("aaaa");
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

