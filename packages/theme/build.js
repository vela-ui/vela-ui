import { copyFile } from "./functions/copyFile.js"
import { extractClasses } from "./functions/extractClasses.js"
import { generateImports } from "./functions/generateImports.js"
import { generatePlugins } from "./functions/generatePlugins.js"
import { generateThemesObject } from "./functions/generateThemesObject.js"
import { removeFiles } from "./functions/removeFiles.js"
import packageJson from "./package.json" with { type: "json" }

const isDev = process.argv.includes("--dev")
const version = packageJson.version

async function generateFiles() {
  await Promise.all([
    copyFile("./functions/themePlugin.js", "./themePlugin.js", "add.js"),
    generatePlugins({ type: "base", srcDir: "src/themes", distDir: "theme" }),
    generatePlugins({ type: "base", srcDir: "src/base", distDir: "base" }),
    generatePlugins({ type: "component", srcDir: "src/components", distDir: "components" }),
    generatePlugins({ type: "utility", srcDir: "src/utilities", distDir: "utilities" }),
  ])
  await Promise.all([
    generateImports("imports.js"),
    generateThemesObject("./theme/object.js"),
    extractClasses({ srcDir: "components" }),
  ])
}

async function build() {
  try {
    !isDev &&
      (await removeFiles(["base", "components", "theme", "utilities", "add.js", "imports.js"]))
    console.time(`${decodeURIComponent("%E2%9B%B5")} ${atob("VmVsYVVJ")} ${version}`)
    await generateFiles()
    console.timeEnd(`${decodeURIComponent("%E2%9B%B5")} ${atob("VmVsYVVJ")} ${version}`)
  } catch (error) {
    throw new Error("Build error: " + error.message)
  }
}

build()
