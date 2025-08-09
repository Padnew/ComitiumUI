import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/styles.css";

import { defaultTheme, ThemeProvider } from "../src/theme/ThemeProvider";
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
