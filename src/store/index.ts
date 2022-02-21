import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    entities: {
      showHint: false,
    },
  },
  getters: {
    getterStoreShowHint(state) {
      return state.entities.showHint;
    },
  },
  mutations: {
    mutateStoreShowHint(state, data) {
      state.entities.showHint = !state.entities.showHint;
    },
  },
  actions: {
    actionStoreShowHint(context, data) {
      context.commit("mutateStoreShowHint", data);
    },
  },
  modules: {},
});
