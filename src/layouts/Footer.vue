<template>
  <div class="footer">
    <v-footer padless>
      <v-row justify="center" no-gutters>
        <v-col class="py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>D2.People</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>