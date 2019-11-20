<template>
  <v-app-bar class="header" app>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 237px" class="ml-0 pl-4">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">D2.PEOPLE</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>add_alert</v-icon>
      </v-btn>
      <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="32px" item>
              <v-img :src="isUserImage" alt="Vuetify"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="menuEvent(item)">
              <v-icon>{{ item.icon }}</v-icon>
              &nbsp;
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-app-bar>
</template>

<script>
import CommonMixins from './mixins/commonMixin'

export default {
  name: "Header",
  mixins: [CommonMixins],
  data() {
    return {
      showMenu: false,
      x: 0,
      y: 0,
      items: [
        { title: "Profile", icon: "verified_user" },
        { title: "Setting", icon: "settings_applications" },
        { title: "Logout", icon: "low_priority" }
      ],
      default: {
        picture: "https://cdn.vuetifyjs.com/images/logos/logo.svg"
      }
    };
  },
  methods: {
    menuEvent(item) {
      if (item.title === "Logout") {
        this.$auth.logout();
      }
    }
  }
};
</script>

<style scoped>
</style>