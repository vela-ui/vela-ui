import type { Preview } from "@storybook/react"
import { ThemeProvider, VelaUIProvider } from "@vela-ui/react"
import React from "react"
import { useDarkMode } from "storybook-dark-mode"

import "./style.css"

const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: "light",
      stylePreview: true,
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
    },
  },
  decorators: [
    (Story, { parameters }) => {
      const selectedTheme = useDarkMode() ? "dark" : "light"
      return (
        <VelaUIProvider>
          <ThemeProvider defaultTheme={selectedTheme}>
            <Story {...parameters} />
          </ThemeProvider>
        </VelaUIProvider>
      )
    },
  ],
}

export default preview
