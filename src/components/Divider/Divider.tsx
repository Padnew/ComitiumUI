import React, { CSSProperties } from "react";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  thickness?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  thickness = "1px",
  color = "#ccc",
  className,
  style,
}) => {
  const isHorizontal = orientation === "horizontal";
  const baseStyles: CSSProperties = {
    backgroundColor: color,
    width: isHorizontal ? "100%" : thickness,
    height: isHorizontal ? thickness : "100%",
    marginTop: isHorizontal ? "5px" : undefined,
    marginBottom: isHorizontal ? "5px" : undefined,
    marginLeft: !isHorizontal ? "5px" : undefined,
    marginRight: !isHorizontal ? "5px" : undefined,
    ...style,
  };
  return <div role="separator" className={className} style={baseStyles} />;
};
