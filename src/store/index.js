import Vuex from "vuex";

import commonStore from "./modules/common";

new Vuex.Store({
  modules: {
    common: commonStore
  }
});
