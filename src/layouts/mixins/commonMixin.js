import Vue from "vue";

export default Vue.mixin({
  computed: {
    isLogin() {
      return this.$store.state.auth.loggedIn
    },
    isUser() {
      return this.$store.state.auth.user;
    },
    isUserImage() {
      return this.isUser ? this.isUser.picture : this.default.picture;
    }
  },
  methods: {}
});
