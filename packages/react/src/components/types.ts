export const defaultThemes = [
  "acid",
  "aqua",
  "autumn",
  "black",
  "abyss",
  "bumblebee",
  "business",
  "cmyk",
  "caramellatte",
  "coffee",
  "corporate",
  "cyberpunk",
  "dark",
  "dracula",
  "emerald",
  "cupcake",
  "fantasy",
  "dim",
  "garden",
  "halloween",
  "lemonade",
  "forest",
  "lofi",
  "luxury",
  "night",
  "nord",
  "pastel",
  "light",
  "retro",
  "silk",
  "synthwave",
  "sunset",
  "valentine",
  "wireframe",
  "winter",
] as const
export const componentPositions = ["top", "bottom", "left", "right"] as const
export const componentShapes = ["square", "circle"] as const
export const componentSizes = ["xs", "sm", "md", "lg", "xl"] as const
export const componentStatuses = ["info", "success", "warning", "error"] as const
export const componentColors = [
  "neutral",
  "primary",
  "secondary",
  "accent",
  ...componentStatuses,
] as const
export const componentDirections = ["vertical", "horizontal"] as const

export type ComponentPosition = (typeof componentPositions)[number]

export type ComponentSize = (typeof componentSizes)[number]

export type ComponentStatus = (typeof componentStatuses)[number]

export type ComponentColor = (typeof componentColors)[number]

export type ComponentShape = (typeof componentShapes)[number]

export type ComponentDirection = (typeof componentDirections)[number]

export type DataTheme = (typeof defaultThemes)[number] | string

export interface ComponentVariantMap {
  base?: string
  size?: Record<ComponentSize, string>
  variant?: Record<string, string>
  color?: Partial<Record<ComponentColor, string>>
  shape?: Record<ComponentShape, string>
  position?: Record<ComponentPosition, string>
  direction?: Record<ComponentDirection, string>
  [key: string]: Record<string, string> | string | undefined
}
