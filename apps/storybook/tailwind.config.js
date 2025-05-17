import velaTheme from "@vela-ui/theme-tw3"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx}", "../../packages/react/src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [velaTheme()],
}
