import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    classes: [],
    languages: [],
    monsters: [],
    subclasses: [],
    items: [],
  },
  mutations: {
    setClasses(state, newState) {
      state.classes = newState;
    },
    setLanguages(state, newState) {
      state.languages = newState;
    },
    setMonsters(state, newState) {
      state.monsters = newState;
    },
    setSubclasses(state, newState) {
      state.subclasses = newState;
    },
    setItems(state, newState) {
      state.items = newState;
    },
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
