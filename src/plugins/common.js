import Vue from "vue"
import request from "./axios"

Vue.prototype.$axios = request
// Vue.prototype.$auth = authService