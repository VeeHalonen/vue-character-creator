import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import { INITIAL_STORE_STATE } from "./helpers";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store(INITIAL_STORE_STATE);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
