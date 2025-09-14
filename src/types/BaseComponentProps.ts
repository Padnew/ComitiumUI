import { CSSProperties } from "react";
import { fontSizeMap, spacingMap } from "../utils/SizeResolver";
import { colorName } from "../theme";
import { resolveFontFamily } from "../utils/FontResolver";

export type BaseComponentProps = {
    color?: colorName;
    padding?: "sm" | "md" | "lg" | "xl" | number;
    margin?: "sm" | "md" | "lg" | "xl" | number;
    fs? : "sm" | "md" | "lg" | "xl" | number;
    textAlign?: "left" | "right" | "center";
    fontWeight?: "normal" | "semibold" | "bold";
    fontFamily?: "sans" | "serif" | "mono";
    style?: React.CSSProperties;
  };


  export const BaseStyleResolver = (props: BaseComponentProps): CSSProperties => {
  const { padding, margin, fs: ts, color, textAlign, style, fontFamily, fontWeight } = props;
  const resolved: CSSProperties = {};

  if (padding !== undefined) resolved.padding = styleInputTypeResolver(padding, spacingMap);
  if (margin !== undefined) resolved.margin = styleInputTypeResolver(margin, spacingMap);
  if (ts !== undefined) resolved.fontSize = styleInputTypeResolver(ts, fontSizeMap);
  if (color) resolved.color = color;
  if (textAlign) resolved.textAlign = textAlign;
  if (fontWeight) resolved.fontWeight = fontWeight;
  if (fontFamily) resolved.fontFamily = resolveFontFamily(fontFamily);
  return { ...resolved, ...style };
};

  const styleInputTypeResolver = (value: number | string, map?: Record<string, number>) => {
    if (typeof value === "number") return `${value}px`;
    if (map && value in map) return `${map[value]}px`;
    return undefined;
  };