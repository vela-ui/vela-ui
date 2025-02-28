"use client"

import { useMemo } from "react"
import { cn, generateClassNames } from "../../utils/classes"
import { useProviderContext } from "../provider"
import { ComponentColor, ComponentSize, ComponentVariantMap, DataTheme } from "../types"

type ComponentVariant = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity"

interface LoaderVariantProps {
  variant?: ComponentVariant
  color?: ComponentColor
  size?: ComponentSize
}

export interface LoaderProps
  extends Omit<React.ComponentProps<"span">, "color">,
    LoaderVariantProps {
  ref?: React.Ref<HTMLSpanElement>
  dataTheme?: DataTheme
}

export const Loader = (props: LoaderProps) => {
  const { className, color, variant, size, dataTheme, ref, ...otherProps } = props

  const globalContext = useProviderContext()
  const prefix = globalContext?.prefix

  const variantsConfig = useMemo<ComponentVariantMap>(
    () => ({
      base: prefix ? "vela-loading" : "loading",
      variant: {
        spinner: prefix ? "vela-loading-spinner" : "loading-spinner",
        dots: prefix ? "vela-loading-dots" : "loading-dots",
        ring: prefix ? "vela-loading-ring" : "loading-ring",
        ball: prefix ? "vela-loading-ball" : "loading-ball",
        bars: prefix ? "vela-loading-bars" : "loading-bars",
        infinity: prefix ? "vela-loading-infinity" : "loading-infinity",
      } as Record<ComponentVariant, string>,
      size: {
        xs: prefix ? "vela-loading-xs" : "loading-xs",
        sm: prefix ? "vela-loading-sm" : "loading-sm",
        md: prefix ? "vela-loading-md" : "loading-md",
        lg: prefix ? "vela-loading-lg" : "loading-lg",
        xl: prefix ? "vela-loading-xl" : "loading-xl",
      },
      color: {
        neutral: "text-neutral",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
        info: "text-info",
        success: "text-success",
        warning: "text-warning",
        error: "text-error",
      },
    }),
    [prefix],
  )

  const getClassNames = useMemo(
    () =>
      generateClassNames(variantsConfig, {
        color,
        variant,
        size,
      }),
    [color, variant, size, variantsConfig],
  )

  return (
    <span
      ref={ref}
      role="presentation"
      data-slot="loading"
      data-theme={dataTheme}
      className={cn(getClassNames, className)}
      {...otherProps}
    >
      {props.children}
    </span>
  )
}
