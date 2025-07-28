import React, { CSSProperties } from "react";
import { BaseComponentProps } from "../../types/BaseComponentProps";
import { resolveSize } from "../../utils/SizeResolver";

type LinkToProps = BaseComponentProps & {
  href: string;
  newTab?: boolean;
  children?: React.ReactNode;
  fontWeight?: "normal" | "semibold" | "bold";
  fontFamily?: "sans" | "serif" | "mono";
};

export const LinkTo: React.FC<LinkToProps> = ({
  href,
  newTab,
  children,
  color = "#1c6ae8",
  size = "md",
  fontWeight = "normal",
  fontFamily = "sans",
  style,
}) => {
  const resolvedStyle: CSSProperties = {
    color,
    fontSize: resolveSize(size),
    fontWeight,
    fontFamily,
    textDecoration: "underline",
    cursor: "pointer",
    ...style,
  };

  const isExternal = /^(http|https):\/\//.test(href);
  const normalizedHref = isExternal
    ? href
    : href.startsWith("/")
    ? href
    : `/${href}`;

  return (
    <a
      href={normalizedHref}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      style={resolvedStyle}
    >
      {children}
    </a>
  );
};
