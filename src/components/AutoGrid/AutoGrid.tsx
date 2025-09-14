import React, { CSSProperties } from "react";
import { resolveGridSize } from "../../utils/SizeResolver";
import { BaseStyleResolver } from "../../types/BaseComponentProps";

type AutoGridProps = {
  children: React.ReactNode;
  columns?: number;
  spacing?: "sm" | "md" | "lg" | "xl" | "none" | number;
};

export const AutoGrid: React.FC<AutoGridProps> = ({
  children,
  columns,
  spacing = "md",
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);
  const gap = typeof spacing === "number" ? spacing : resolveGridSize(spacing);

  const gridStyles: CSSProperties = {
    display: "grid",
    gridTemplateColumns: columns
      ? `repeat(${columns}, 1fr)`
      : "repeat(auto-fit, minmax(200px, 1fr))",
    gap: gap,
    ...baseStyles,
  };
  return <div style={gridStyles}>{children}</div>;
};
