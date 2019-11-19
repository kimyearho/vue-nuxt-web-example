<template>
  <div>
    <div v-if="isLogin">
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-card>
            <v-row>
              <v-col cols="12" :style="{padding: '0px'}">
                <v-img
                  src="https://www.htxt.co.za/wp-content/uploads/2019/06/ShadowKeep.jpg"
                  max-width="1920"
                  max-height="150"
                  position="0 -250px"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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

