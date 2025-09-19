import { useTheme } from "../theme/ThemeProvider";
import { fontFamilyName } from "../theme";

export const resolveFontFamily = (
  family: fontFamilyName = "sans"
): string => {
  const { fontFamilies } = useTheme();
  return fontFamilies[family] ?? family;
};