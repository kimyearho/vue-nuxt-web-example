<template>
  <el-form ref="form">
    <el-form-item>
      <el-row>
        <el-col :span="24">
          <h1>SECTION BASE</h1>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  asyncData(context) {
    console.log('context | ', context)
    return { name: "World" };
  },
  fetch() {},
  middleware: "middlewareExample",
  beforeCreate() {},
  created() {},
  head() {},
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

