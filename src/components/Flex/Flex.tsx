import { resolveSize } from "../../utils/SizeResolver";
import { CSSProperties } from "react";

type FlexProps = {
  direction?: "row" | "column";
  spacing?: "sm" | "md" | "lg" | "xl" | string;
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
};

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  spacing = "1rem",
  className,
  children,
  style,
}) => {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    gap: resolveSize(spacing),
    flexDirection: direction,
    ...style,
  };
  return (
    <div className={className} style={baseStyle}>
      {children}
    </div>
  );
};
