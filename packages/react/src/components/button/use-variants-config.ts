import { useMemo } from "react"
import { useProviderContext } from "../provider"
import { ComponentVariantMap } from "../types"

export function useVariantsConfig() {
  const globalContext = useProviderContext()
  const prefix = globalContext?.prefix
  // const addPrefix = (className = "") => addClassPrefix(prefix, className, matchClasses)

  const variantsConfig = useMemo<ComponentVariantMap>(
    () => ({
      base: prefix ? "vela-btn" : "btn",
      size: {
        xs: prefix ? "vela-btn-xs" : "btn-xs",
        sm: prefix ? "vela-btn-sm" : "btn-sm",
        md: prefix ? "vela-btn-md" : "btn-md",
        lg: prefix ? "vela-btn-lg" : "btn-lg",
        xl: prefix ? "vela-btn-xl" : "btn-xl",
      },
      variant: {
        outline: prefix ? "vela-btn-outline" : "btn-outline",
        soft: prefix ? "vela-btn-soft" : "btn-soft",
        dash: prefix ? "vela-btn-dash" : "btn-dash",
        ghost: prefix ? "vela-btn-ghost" : "btn-ghost",
        link: prefix ? "vela-btn-link" : "btn-link",
      },
      color: {
        neutral: prefix ? "vela-btn-neutral" : "btn-neutral",
        primary: prefix ? "vela-btn-primary" : "btn-primary",
        secondary: prefix ? "vela-btn-secondary" : "btn-secondary",
        accent: prefix ? "vela-btn-accent" : "btn-accent",
        info: prefix ? "vela-btn-info" : "btn-info",
        success: prefix ? "vela-btn-success" : "btn-success",
        warning: prefix ? "vela-btn-warning" : "btn-warning",
        error: prefix ? "vela-btn-error" : "btn-error",
      },
      shape: {
        square: prefix ? "vela-btn-square" : "btn-square",
        circle: prefix ? "vela-btn-circle" : "btn-circle",
      },
      active: prefix ? "vela-btn-active" : "btn-active",
      fullWidth: prefix ? "vela-btn-block" : "btn-block",
      fullRounded: prefix ? "vela-btn-rounded" : "btn-rounded",
      isDisabled: prefix ? "vela-btn-disabled" : "btn-disabled",
      isPending: prefix ? "vela-btn-pending" : "btn-pending",
    }),
    [prefix],
  )

  return variantsConfig
}
