import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/styles.css";

import { ThemeProvider } from "../src/theme/ThemeProvider";
import { colors, fontFamilies } from "../src/theme/theme";

const defaultTheme = {
  colors,
  fontFamilies,
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
