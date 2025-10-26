import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  target: "es2019",
  format: ["cjs", "esm"],
  external: ["react"],
  minify: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})
