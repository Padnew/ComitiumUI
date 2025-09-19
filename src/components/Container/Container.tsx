import React from "react";
import { resolveShadow } from "../../utils/ShadowResolver";
import { resolveRadius } from "../../utils/RadiusResolver";
import { BaseStyleResolver } from "../../style/baseResolver";
import { BaseComponentProps } from "../../types/base";

type ContainerProps = {
  shadow?: "none" | "sm" | "md" | "lg";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  curved?: "none" | "sm" | "md" | "lg";
  backgroundColor?: string;
};

export const Container: React.FC<ContainerProps> = ({
  shadow = "none",
  children,
  style,
  curved = "none",
  backgroundColor = "inherit",
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const containerStyles: React.CSSProperties = {
    boxShadow: resolveShadow(shadow),
    borderRadius: resolveRadius(curved),
    backgroundColor,
    ...baseStyles,
  };

  return <div style={containerStyles}>{children}</div>;
};
