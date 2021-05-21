import colors from "vuetify/lib/util/colors";

export const light = {
  primary: {
    base: colors.blueGrey.base,
    // darken1: colors.blueGrey.darken2,
  },
  secondary: "#830909",
  // All keys will generate theme styles,
  // Here we add a custom `tertiary` color
  tertiary: colors.pink.base,
};

export const dark = {
  ...light,
  primary: colors.blueGrey.lighten1,
};
