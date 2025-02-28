import { useMemo } from "react"
import { useProviderContext } from "../provider"
import { ComponentVariantMap } from "../types"

export function useVariantsConfig() {
  const globalContext = useProviderContext()
  const prefix = globalContext?.prefix

  const variantsConfig = useMemo<ComponentVariantMap>(
    () => ({
      base: prefix ? "vela-badge" : "badge",
      size: {
        xs: prefix ? "vela-badge-xs" : "badge-xs",
        sm: prefix ? "vela-badge-sm" : "badge-sm",
        md: prefix ? "vela-badge-md" : "badge-md",
        lg: prefix ? "vela-badge-lg" : "badge-lg",
        xl: prefix ? "vela-badge-xl" : "badge-xl",
      },
      variant: {
        outline: prefix ? "vela-badge-outline" : "badge-outline",
        soft: prefix ? "vela-badge-soft" : "badge-soft",
        dash: prefix ? "vela-badge-dash" : "badge-dash",
        ghost: prefix ? "vela-badge-ghost" : "badge-ghost",
      },
      color: {
        neutral: prefix ? "vela-badge-neutral" : "badge-neutral",
        primary: prefix ? "vela-badge-primary" : "badge-primary",
        secondary: prefix ? "vela-badge-secondary" : "badge-secondary",
        accent: prefix ? "vela-badge-accent" : "badge-accent",
        info: prefix ? "vela-badge-info" : "badge-info",
        success: prefix ? "vela-badge-success" : "badge-success",
        warning: prefix ? "vela-badge-warning" : "badge-warning",
        error: prefix ? "vela-badge-error" : "badge-error",
      },
      fullRounded: prefix ? "vela-badge-rounded" : "badge-rounded",
    }),
    [prefix],
  )

  return variantsConfig
}
