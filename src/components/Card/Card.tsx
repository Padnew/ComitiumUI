import React from "react";
import { Divider } from "../Divider";
import { resolveShadow } from "../../utils/ShadowResolver";
import { resolveRadius } from "../../utils/RadiusResolver";
import { BaseStyleResolver } from "../../style/baseResolver";
import { BaseComponentProps } from "../../types/base";

type CardProps = BaseComponentProps & {
  title?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  withDividers?: boolean;
  curved?: "none" | "sm" | "md" | "lg";
  backgroundColor?: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  shadow = "md",
  footer,
  children,
  withDividers = false,
  curved = "md",
  backgroundColor = "#ffffff",
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const cardStyles: React.CSSProperties = {
    padding: "1rem",
    boxShadow: resolveShadow(shadow),
    borderRadius: resolveRadius(curved),
    backgroundColor,
    ...baseStyles,
  };

  return (
    <div style={cardStyles}>
      {title && (
        <>
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h2>
          {withDividers && <Divider />}
        </>
      )}
      <div style={{ marginBottom: "0.5rem" }}>{children}</div>
      {footer && (
        <>
          {withDividers && <Divider />}
          <div>{footer}</div>
        </>
      )}
    </div>
  );
};
