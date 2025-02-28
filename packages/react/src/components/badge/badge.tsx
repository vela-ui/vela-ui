"use client"

import { useMemo } from "react"
import { cn, generateClassNames } from "../../utils/classes"
import { ComponentColor, ComponentSize, DataTheme } from "../types"
import { useVariantsConfig } from "./use-variants-config"

export type ComponentVariant = "outline" | "soft" | "dash" | "ghost" | "link"

export interface BadgeVariantProps {
  color?: ComponentColor
  variant?: ComponentVariant
  size?: ComponentSize
}

export interface BadgeProps extends Omit<React.ComponentProps<"span">, "color">, BadgeVariantProps {
  ref?: React.Ref<HTMLSpanElement>
  dataTheme?: DataTheme
}

export const Badge = (props: BadgeProps) => {
  const { className, color, variant, size, dataTheme, ref, ...otherProps } = props

  const variantsConfig = useVariantsConfig()

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
      data-slot="badge"
      data-theme={dataTheme}
      className={cn(getClassNames, className)}
      {...otherProps}
    >
      {props.children}
    </span>
  )
}
