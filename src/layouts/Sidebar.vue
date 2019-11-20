<template>
  <v-navigation-drawer
    v-model="drawer"
    class="v-navigation"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list>
      <template v-for="item in items">
        <v-list-group
          v-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon
        >
          <template v-slot:activator>
            <v-list-item  :style="{padding: '0px'}">
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item v-for="(child, i) in item.children" :key="i">
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ child.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item v-else :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: null,
      items: [
        { icon: "dashboard", text: "요약" },
        {
          icon: "keyboard_arrow_up",
          "icon-alt": "keyboard_arrow_down",
          text: "주간 리셋정보",
          model: true,
          children: [{ icon: "", text: "황혼전" }]
        }
        // {
        //   icon: "keyboard_arrow_up",
        //   "icon-alt": "keyboard_arrow_down",
        //   text: "More",
        //   model: false,
        //   children: [
        //     { text: "Import" },
        //     { text: "Export" },
        //     { text: "Print" },
        //     { text: "Undo changes" },
        //     { text: "Other contacts" }
        //   ]
        // },
        // { icon: "settings", text: "Settings" },
        // { icon: "chat_bubble", text: "Send feedback" },
        // { icon: "help", text: "Help" },
        // { icon: "phonelink", text: "App downloads" },
        // { icon: "keyboard", text: "Go to the old version" }
      ]
    };
  }
};
</script>

<style scoped>
</style>