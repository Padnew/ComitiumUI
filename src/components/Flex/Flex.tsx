import { BaseStyleResolver } from "../../types/BaseComponentProps";
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
  ...props
}) => {
  const resolvedSystemStyles = BaseStyleResolver(props);

  const baseStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap:
      typeof spacing === "number"
        ? `${spacing}px`
        : BaseStyleResolver({ fs: spacing }).fontSize,
    ...resolvedSystemStyles,
  };

  return <div style={baseStyle}>{children}</div>;
};
