export const fontFamilies = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

export const colors = {
  red: "#ff0000",
  blue: "#1c6ae8",
  green: "#02f72f",
  orange: "#fc6d00",
  gray: "#8a8a8a",
  black: "#000000",
  white: "#ffffff",
};

export type colorName = keyof typeof colors | (string & {});
export type fontFamilyName = keyof typeof fontFamilies | (string & {});