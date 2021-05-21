import Vue from "vue";
import Vuetify from "vuetify/lib";
import { light, dark } from "./theme";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: { light, dark },
    // theme: {
    //   options: { customProperties: true }, // to enable custom SASS
    // },
  },
});
