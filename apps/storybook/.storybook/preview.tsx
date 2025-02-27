import type { Preview } from "@storybook/react"
import { ThemeProvider, VelaUIProvider } from "@vela-ui/react"
import React from "react"

import "./style.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters, globals }) => {
      const selectedTheme = globals.theme || "light"
      return (
        <VelaUIProvider>
          <ThemeProvider defaultTheme={selectedTheme}>
            <Story {...parameters} />
          </ThemeProvider>
        </VelaUIProvider>
      )
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
}

export default preview
