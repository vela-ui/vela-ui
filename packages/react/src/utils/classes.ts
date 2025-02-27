import { type ClassValue, clsx } from "clsx"
import { composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(...inputs))

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tailwind: string,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tailwind, className))
}

export function addClassPrefix(prefix = "", className: string, matchClasses: string[]): string {
  if (!className || !prefix) {
    return className || ""
  }
  return className
    .split(" ")
    .map((cls) => {
      if (matchClasses.some((match) => cls === match || cls.startsWith(match + "-"))) {
        return `${prefix}${cls}`
      }
      return cls
    })
    .join(" ")
}

export const generateClassNames = <T extends Record<string, any>>(
  variantsConfig: Record<string, any>,
  props: T,
): string => {
  const classes: string[] = []

  if (variantsConfig.base) {
    classes.push(variantsConfig.base)
  }

  Object.entries(props).forEach(([key, value]) => {
    if (value === undefined || value === null) return

    const variantConfig = variantsConfig[key]
    if (!variantConfig) return

    if (typeof variantConfig === "string" && value === true) {
      classes.push(variantConfig)
    } else if (typeof variantConfig === "object" && typeof value === "string") {
      const variantClass = variantConfig[value]
      if (variantClass) {
        classes.push(variantClass)
      }
    }
  })

  return classes.filter(Boolean).join(" ")
}
