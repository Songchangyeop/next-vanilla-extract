import { createGlobalTheme } from "@vanilla-extract/css";

export const Theme = createGlobalTheme(":root", {
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});
