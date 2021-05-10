import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuex);

// TODO: set up store
const store = new Vuex.Store({
  state: {
    classes: [],
  },
  mutations: {
    setClasses(state, newState) {
      console.log(newState);
      state.classes = newState;
    },
  },
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
