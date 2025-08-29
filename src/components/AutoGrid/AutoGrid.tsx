import React, { CSSProperties } from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { gridSizeResolver } from "../../utils/SizeResolver";

type AutoGridProps = {
  children: React.ReactNode;
  columns?: number;
  spacing?: "sm" | "md" | "lg" | "xl" | number;
  style?: React.CSSProperties;
};

export const AutoGrid: React.FC<AutoGridProps> = ({
  children,
  columns,
  spacing = "md",
  style,
}) => {
  const gap = typeof spacing === "number" ? spacing : gridSizeResolver(spacing);
  const baseStyles: CSSProperties = {
    display: "grid",
    gridTemplateColumns: columns
      ? `repeat(${columns}, 1fr)`
      : "repeat(auto-fit, minmax(200px, 1fr))",
    gap: gap,
    ...style,
  };
  return <div style={baseStyles}>{children}</div>;
};
