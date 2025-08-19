import React from "react";
import { resolveShadow } from "../../utils/ShadowResolver";
import { resolveRadius } from "../../utils/RadiusResolver";
import { resolvePadding } from "../../utils/SizeResolver";

type ContainerProps = {
  shadow?: "none" | "sm" | "md" | "lg";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  curved?: "none" | "sm" | "md" | "lg";
  backgroundColor?: string;
  padding?: "sm" | "md" | "lg" | "xl";
};

export const Container: React.FC<ContainerProps> = ({
  shadow = "none",
  children,
  style,
  curved = "none",
  backgroundColor = "inherit",
  padding = "md",
}) => {
  const baseStyle: React.CSSProperties = {
    boxShadow: resolveShadow(shadow),
    borderRadius: resolveRadius(curved),
    padding: resolvePadding(padding),
    backgroundColor,
    ...style,
  };

  return <div style={baseStyle}>{children}</div>;
};
