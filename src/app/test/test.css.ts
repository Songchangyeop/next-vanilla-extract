import { Theme } from "@/styles/globalTheme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
  fontSize: 20,
  color: Theme.color.brand,
});
