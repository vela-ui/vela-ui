import fs from "fs/promises"
import { createDirectoryBasedOnFileNames } from "./createDirectoryBasedOnFileNames.js"
import { createPluginFiles } from "./createPluginFiles.js"
import { cssToJs } from "./cssToJs.js"
import { getFileNames } from "./getFileNames.js"

export const generatePlugins = async ({ type, srcDir, distDir, files = [] }) => {
  await fs.mkdir(distDir, { recursive: true })
  const cssFiles = files.length ? files : await getFileNames(srcDir, ".css")

  await Promise.all(
    cssFiles.map(async (cssFile) => {
      const [jsContent, componentDir] = await Promise.all([
        cssToJs(`${srcDir}/${cssFile}.css`),
        createDirectoryBasedOnFileNames(cssFile, ".css", distDir),
      ])

      await createPluginFiles(type, componentDir, jsContent, cssFile)
    }),
  )
}
