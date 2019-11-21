<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-2" tile :style="{height: '200px'}">
              <div id="joystick"></div>
              <div>
                <span>Last X: {{ frontX }}</span>
              </div>
              <div>
                <span>Last Y: {{ frontY }}</span>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-2" tile :style="{height: '200px'}"></v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NipplePad",
  data() {
    return {
      frontX: 0,
      frontY: 0,
      nipple: null
    };
  },
  watch: {
    nipple: {
      handler(val, oldVal) {
        this.frontX = val[0].frontPosition.x;
        this.frontY = val[0].frontPosition.y;
      },
      deep: true
    }
  },
  mounted() {
    this.nipple = this.$nipple.create({
      zone: document.getElementById("joystick"),
      mode: "static",
      position: { left: "50%", top: "50%" },
      color: "red"
    });
  }
};
</script>

<style scoped>
#joystick >>> .back {
  background: #000 !important;
}
#joystick >>> .front {
  background: #fff !important;
}
</style>