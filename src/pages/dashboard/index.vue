<template>
  <div>
    <div v-if="isLogin">
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-row>
            <v-col>
              <v-alert
                type="error"
                border="left"
                elevation="2"
                colored-border
                icon="notifications_active"
              >
                <strong>데스티니 주요 소식</strong>
              </v-alert>
            </v-col>
          </v-row>

          <v-card>
            <v-row>
              <v-col cols="6" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card class="pa-2" :elevation="hover ? 12 : 2" tile>
                    <v-img
                      src="https://www.bungie.net/pubassets/pkgs/129/129566/FrontpageBanner_01.jpg?cv=3983621215&av=677015089"
                      height="295"
                    >
                      <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                          <div class="subheading">
                            <h2>이번 주 번지</h2>
                          </div>
                          <div class="body-1">2019/11/14</div>
                        </v-col>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="6" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card class="pa-2" :elevation="hover ? 12 : 2" tile>
                    <v-img
                      src="https://www.bungie.net/pubassets/pkgs/128/128548/Update_Hotfix_Header.jpg?cv=3983621215&av=677015089"
                      height="295"
                    >
                      <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                          <div class="subheading">
                            <h2>업데이트</h2>
                          </div>
                          <div class="body-1">데스티니 가디언즈 2.6.1.1</div>
                        </v-col>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
              <v-col cols="6" md="4">
                <v-hover v-slot:default="{ hover }">
                  <v-card class="pa-2" :elevation="hover ? 12 : 2" tile>
                    <v-img
                      src="https://cdn3.dualshockers.com/wp-content/uploads/2019/08/Shadowkeep_Key_Art_16-9_EN.jpg"
                      height="295"
                    >
                      <v-row align="end" class="lightbox white--text pa-2 fill-height">
                        <v-col>
                          <div class="subheading">
                            <h2>불멸의 시즌</h2>
                          </div>
                          <div class="body-1">heyfromjonathan@gmail.com</div>
                        </v-col>
                      </v-row>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="11">
          <v-row>
            <v-col>
              <v-alert color="cyan" border="left" elevation="2" colored-border icon="search">
                <strong>주간 초기화 정보 - 2019/11/20 ~ 27일 (한국 기준)</strong>
              </v-alert>
            </v-col>
          </v-row>
          <v-card>
            <v-row>
              <v-col cols="6" md="4">
                <v-card class="pa-2 mx-auto" max-width="400" raised>
                  <v-img
                    src="https://lordsofgaming.net/wp-content/uploads/2019/09/fallen-1024x576.jpg"
                    width="400"
                    height="200"
                  ></v-img>
                  <v-card-subtitle class="pb-0">악몽 사냥: 오만</v-card-subtitle>
                  <v-card-text class="text--primary" :style="{paddingTop: '10px'}">
                    <h2>켈 스콜라스</h2>
                    <div :style="{paddingTop: '10px'}">Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card class="pa-2 mx-auto" max-width="400" raised>
                  <v-img
                    src="https://vignette.wikia.nocookie.net/destinypedia/images/7/7d/Gate_Lord_Slam.jpg/revision/latest?cb=20151119180412"
                    width="400"
                    height="200"
                  ></v-img>
                  <v-card-subtitle class="pb-0">악몽 사냥: 굴종</v-card-subtitle>
                  <v-card-text class="text--primary" :style="{paddingTop: '10px'}">
                    <h2>관문 군주 지드론</h2>
                    <div :style="{paddingTop: '10px'}">Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card class="pa-2 mx-auto" max-width="400" raised>
                  <v-img
                    src="https://vignette.wikia.nocookie.net/destinypedia/images/c/ce/Shadowthief.jpg/revision/latest?cb=20150507141810"
                    width="400"
                    height="200"
                  ></v-img>
                  <v-card-subtitle class="pb-0">악몽 사냥: 고립</v-card-subtitle>
                  <v-card-text class="text--primary" :style="{paddingTop: '10px'}">
                    <h2>흉터의 타닉스</h2>
                    <div :style="{paddingTop: '10px'}">Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>
                </v-card>
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

