const state = () => ({
  searchList: []
});

const getters = {
  getSearchList(state) {
    return state.searchList;
  }
};

export default {
  state,
  getters
};
