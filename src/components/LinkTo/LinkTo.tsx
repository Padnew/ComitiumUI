import React, { CSSProperties } from "react";
import {
  BaseComponentProps,
  BaseStyleResolver,
} from "../../types/BaseComponentProps";
import { resolveFontFamily } from "../../utils/FontResolver";

type LinkToProps = BaseComponentProps & {
  href: string;
  newTab?: boolean;
  children?: React.ReactNode;
};

export const LinkTo: React.FC<LinkToProps> = ({
  href,
  newTab,
  children,
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const isExternal = /^(http|https):\/\//.test(href);
  const normalizedHref = isExternal
    ? href
    : href.startsWith("/")
    ? href
    : `/${href}`;

  const linkToStyles: CSSProperties = {
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    ...baseStyles,
  };

  return (
    <a
      href={normalizedHref}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={linkToStyles}
    >
      {children}
    </a>
  );
};
