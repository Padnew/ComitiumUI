import { CSSProperties } from "react";
import { SpacingSelector, StandardSizing } from "../types/base";

const spacingMap = { sm: 4, md: 8, lg: 16, xl: 24 };

export const styleInputTypeResolver = (
  value: number | string,
  map?: Record<string, number>
) => {
  if (typeof value === "number") return `${value}px`;
  if (map && value in map) return `${map[value]}px`;
  return undefined;
};

export const paddingResolver = (
  padding: StandardSizing | SpacingSelector,
  resolved: CSSProperties
) => {
  if (typeof padding === "object") {
    if (padding.up !== undefined)
      resolved.paddingTop = styleInputTypeResolver(padding.up, spacingMap);
    if (padding.right !== undefined)
      resolved.paddingRight = styleInputTypeResolver(padding.right, spacingMap);
    if (padding.down !== undefined)
      resolved.paddingBottom = styleInputTypeResolver(padding.down, spacingMap);
    if (padding.left !== undefined)
      resolved.paddingLeft = styleInputTypeResolver(padding.left, spacingMap);
  } else {
    resolved.padding = styleInputTypeResolver(padding, spacingMap);
  }
};

export const marginResolver = (
  margin: StandardSizing | SpacingSelector,
  resolved: CSSProperties
) => {
  if (typeof margin === "object") {
    if (margin.up !== undefined)
      resolved.marginTop = styleInputTypeResolver(margin.up, spacingMap);
    if (margin.right !== undefined)
      resolved.marginRight = styleInputTypeResolver(margin.right, spacingMap);
    if (margin.down !== undefined)
      resolved.marginBottom = styleInputTypeResolver(margin.down, spacingMap);
    if (margin.left !== undefined)
      resolved.marginLeft = styleInputTypeResolver(margin.left, spacingMap);
  } else {
    resolved.margin = styleInputTypeResolver(margin, spacingMap);
  }
};
