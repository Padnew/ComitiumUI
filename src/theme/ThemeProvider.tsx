import { createContext, useContext, ReactNode } from "react";
import { colors, fontFamilies } from "./theme";

type Theme = {
  colors: typeof colors & Record<string, string>;
  fontFamilies: typeof fontFamilies & Record<string, string>;
};

const defaultTheme: Theme = { colors, fontFamilies };

const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
  theme?: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      <>
        <style>{`
          body {
            font-family: ${theme.fontFamilies.sans};
            margin: 0;
            padding: 0;
          }
        `}</style>
        {children}
      </>
    </ThemeContext.Provider>
  );
};
