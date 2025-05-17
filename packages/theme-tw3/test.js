import { readFileSync, writeFileSync } from "fs"
import { dirname, join } from "path"
import postcss from "postcss"
import postcssJs from "postcss-js"
import { fileURLToPath } from "url"
import { cleanCss } from "./functions/cleanCss.js"

const replaceApplyTrueWithEmptyObject = (obj) => {
  const stack = [obj]

  while (stack.length > 0) {
    const currentObj = stack.pop()

    for (const [key, value] of Object.entries(currentObj)) {
      if (typeof value === "object" && value !== null) {
        stack.push(value)
      }

      if (key.startsWith("@apply") && value === true) {
        currentObj[key] = {}
      }
    }
  }
}

// function to convert camelCase to kebab-case
const camelToKebab = (str) => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
}

// Function to transform object keys from camelCase to kebab-case
const transformKeys = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj

  if (Array.isArray(obj)) {
    return obj.map(transformKeys)
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      camelToKebab(key),
      typeof value === "object" ? transformKeys(value) : value,
    ]),
  )
}

// Get the directory name of the current module
const __dirname = dirname(fileURLToPath(import.meta.url))

// Read the CSS file directly
const rawCss = readFileSync(join(__dirname, "./dist/components.css"), "utf-8")

// Clean the CSS
const cleanedCss = cleanCss(rawCss)

// Parse the CSS and convert to JS object
const root = postcss.parse(cleanedCss)
const jsContent = postcssJs.objectify(root)

const kebabCaseContent = transformKeys(jsContent)

// Apply any necessary transformations
replaceApplyTrueWithEmptyObject(kebabCaseContent)

// Write the JS object to a file with export default
writeFileSync(
  join(__dirname, "./dist/components.js"),
  `export default ${JSON.stringify(kebabCaseContent, null, null)}`,
)
