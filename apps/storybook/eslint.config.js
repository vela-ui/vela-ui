import { config } from "@vela-ui/eslint-config/react-internal"
import pluginStorybook from "eslint-plugin-storybook"

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [pluginStorybook.configs.recommended],
  },
]
