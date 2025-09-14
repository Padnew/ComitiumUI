import { CSSProperties } from "react";
import { fontSizeMap, spacingMap } from "../utils/SizeResolver";
import { colorName } from "../theme";

export type BaseComponentProps = {
    color?: colorName;
    padding?: "sm" | "md" | "lg" | "xl" | number;
    margin?: "sm" | "md" | "lg" | "xl" | number;
    fs? : "sm" | "md" | "lg" | "xl" | number;
    textAlign?: "left" | "right" | "center"
    style?: React.CSSProperties;
  };


  export const BaseStyleResolver = (props: BaseComponentProps): CSSProperties => {
  const { padding, margin, fs: ts, color, textAlign, style } = props;
  const resolved: CSSProperties = {};

  if (padding !== undefined) resolved.padding = styleInputTypeResolver(padding, spacingMap);
  if (margin !== undefined) resolved.margin = styleInputTypeResolver(margin, spacingMap);
  if (ts !== undefined) resolved.fontSize = styleInputTypeResolver(ts, fontSizeMap);
  if (color) resolved.color = color;
  if (textAlign) resolved.textAlign = textAlign;

  return { ...resolved, ...style };
};

  const styleInputTypeResolver = (value: number | string, map?: Record<string, number>) => {
    if (typeof value === "number") return `${value}px`;
    if (map && value in map) return `${map[value]}px`;
    return undefined;
  };