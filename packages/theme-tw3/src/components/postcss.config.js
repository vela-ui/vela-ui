export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {
      config: "./src/components/tailwind.config.js",
    },
  },
}
