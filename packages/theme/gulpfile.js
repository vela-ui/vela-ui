import { generatePlugins } from "./functions/generatePlugins.js"

async function buildTask() {
  await generatePlugins({
    type: "component",
    srcDir: "src/components",
    distDir: "components",
    files: ["button"],
  })
}

export default buildTask

// export default function () {
//   watch("src/**/*.css", buildTask)
// }
