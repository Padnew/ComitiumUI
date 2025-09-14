import { resolveFontFamily } from "../../utils/FontResolver";
import { fontFamilyName, colorName } from "../../theme";
import { fontSizeMap } from "../../utils/SizeResolver";
import {
  BaseComponentProps,
  BaseStyleResolver,
} from "../../types/BaseComponentProps";

type TextProps = BaseComponentProps & {
  fontWeight?: "normal" | "semibold" | "bold";
  fontFamily?: fontFamilyName;
  children?: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({
  children,
  fontWeight = "normal",
  fontFamily = "sans",
  ...props
}) => {
  const baseStyles = BaseStyleResolver(props);

  const resolvedStyle: React.CSSProperties = {
    fontWeight,
    fontFamily: resolveFontFamily(fontFamily),
    ...baseStyles,
  };

  return <p style={resolvedStyle}>{children}</p>;
};
