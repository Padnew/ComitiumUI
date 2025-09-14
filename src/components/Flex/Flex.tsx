import { resolveTextSize } from "../../utils/SizeResolver";
import { CSSProperties } from "react";

type FlexProps = {
  direction?: "row" | "column";
  spacing?: "sm" | "md" | "lg" | "xl" | number;
  children: React.ReactNode;
  style?: CSSProperties;
};

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  spacing = "md",
  children,
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    gap: typeof spacing === "number" ? spacing : resolveTextSize(spacing),
    flexDirection: direction,
    ...style,
  };
  return <div style={baseStyle}>{children}</div>;
};
