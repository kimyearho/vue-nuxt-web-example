const state = () => ({
  key: null,
  user: null
});

const getters = {
  getApiKey() {}
};

const mutations = {
  SET_AUTH(data) {
    state.user = data;
  }
};

export default {
  state,
  getters,
  mutations
};
