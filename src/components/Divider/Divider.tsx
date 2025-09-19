import React, { CSSProperties } from "react";
import { colorName } from "../../theme";
import { BaseStyleResolver } from "../../style/baseResolver";
import { BaseComponentProps } from "../../types/base";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  thickness?: string;
  color?: colorName | string;
};

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  thickness = "1px",
  color = "grey",
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const isHorizontal = orientation === "horizontal";
  const dividerStyles: CSSProperties = {
    backgroundColor: color,
    width: isHorizontal ? "100%" : thickness,
    height: isHorizontal ? thickness : "100%",
    marginTop: isHorizontal ? "5px" : undefined,
    marginBottom: isHorizontal ? "5px" : undefined,
    marginLeft: !isHorizontal ? "5px" : undefined,
    marginRight: !isHorizontal ? "5px" : undefined,
    ...baseStyles,
  };
  return <div role="separator" style={dividerStyles} />;
};
