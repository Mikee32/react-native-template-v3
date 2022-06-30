import React from "react";
import { extendTheme } from "native-base";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const colors = {
  primary: {
    50: "#ffe1e6",
    100: "#ffb1b8",
    200: "#ff7f89",
    300: "#ff4c5b",
    400: "#ff1a2c",
    500: "#e60013",
    600: "#b4000e",
    700: "#810008",
    800: "#500003",
    900: "#210000",
  },
};

export default extendTheme({ config, colors });
