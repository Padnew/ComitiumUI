import { resolveSize } from "../../utils/SizeResolver";
import { resolveFontFamily } from "../../utils/FontResolver";
import { fontFamilyName, colorName } from "../../theme";

type TextProps = {
  fontWeight?: "normal" | "semibold" | "bold";
  fontFamily?: fontFamilyName;
  color?: colorName;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl" | string;
  children?: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({
  children,
  color = "black",
  size = "sm",
  fontWeight = "normal",
  fontFamily = "sans",
  style,
}) => {
  const resolvedStyle: React.CSSProperties = {
    color,
    fontSize: resolveSize(size),
    fontWeight,
    fontFamily: resolveFontFamily(fontFamily),
    ...style,
  };

  return <p style={resolvedStyle}>{children}</p>;
};
