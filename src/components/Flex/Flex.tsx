import { BaseStyleResolver } from "../../types/BaseComponentProps";
import { CSSProperties } from "react";

type FlexProps = {
  direction?: "row" | "column";
  spacing?: "sm" | "md" | "lg" | "xl" | number;
  children: React.ReactNode;
};

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  spacing = "md",
  children,
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const flexStyles: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap:
      typeof spacing === "number"
        ? `${spacing}px`
        : BaseStyleResolver({ fs: spacing }).fontSize,
    ...baseStyles,
  };

  return <div style={flexStyles}>{children}</div>;
};
