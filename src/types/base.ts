import { colorName } from "../theme";

export type StandardSizing = "sm" | "md" | "lg" | "xl" | number;

export type SpacingSelector = {
  left?: StandardSizing;
  right?: StandardSizing;
  up?: StandardSizing;
  down?: StandardSizing;
};

export type BaseComponentProps = {
  color?: colorName;
  padding?: StandardSizing | SpacingSelector;
  margin?: StandardSizing | SpacingSelector;
  fs?: StandardSizing;
  textAlign?: "left" | "right" | "center";
  fontWeight?: "normal" | "semibold" | "bold";
  fontFamily?: "sans" | "serif" | "mono";
  style?: React.CSSProperties;
};
