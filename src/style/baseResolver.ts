import { CSSProperties } from "react";
import { fontSizeMap } from "../utils/SizeResolver";
import { resolveFontFamily } from "../utils/font";
import { BaseComponentProps } from "../types/base";
import {
  marginResolver,
  paddingResolver,
  styleInputTypeResolver,
} from "../utils/spacing";

export const BaseStyleResolver = (props: BaseComponentProps): CSSProperties => {
  const {
    padding,
    margin,
    fs: ts,
    color,
    textAlign,
    style,
    fontFamily,
    fontWeight,
  } = props;
  const resolved: CSSProperties = {};

  if (padding != undefined) {
    paddingResolver(padding, resolved);
  }
  if (margin !== undefined) {
    marginResolver(margin, resolved);
  }

  if (ts !== undefined)
    resolved.fontSize = styleInputTypeResolver(ts, fontSizeMap);
  if (color) resolved.color = color;
  if (textAlign) resolved.textAlign = textAlign;
  if (fontWeight) resolved.fontWeight = fontWeight;
  if (fontFamily) resolved.fontFamily = resolveFontFamily(fontFamily);
  return { ...resolved, ...style };
};
