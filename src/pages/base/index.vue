<template>
  <section class="container"></section>
</template>

<script>
import commonMixin from "@/layouts/mixins/commonMixin"

export default {
  name: "Base",
  mixins: [commonMixin],
  data() {
    return {
      items: []
    };
  },
  asyncData(context) {
    console.log(context)
    // return $axios.get("/search", { params: queryParams }).then(({ data }) => {
    //   return { items: data.items };
    // });
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

