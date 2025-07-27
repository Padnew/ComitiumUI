import { createContext, useContext, ReactNode } from "react";
import { colors, fontFamilies } from "./theme";

type Theme = {
  colors: typeof colors & Record<string, string>;
  fontFamilies: typeof fontFamilies & Record<string, string>;
};

const ThemeContext = createContext<Theme>({
  colors,
  fontFamilies,
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = { colors, fontFamilies },
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
