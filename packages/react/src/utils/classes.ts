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
