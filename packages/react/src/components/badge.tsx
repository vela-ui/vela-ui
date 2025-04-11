"use client"

import { useMemo } from "react"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { DataTheme } from "./types"

const badgeVariants = tv({
  base: "badge",
  variants: {
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
      xl: "badge-xl",
    },
    variant: {
      outline: "badge-outline",
      soft: "badge-soft",
      dash: "badge-dash",
      ghost: "badge-ghost",
    },
    color: {
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    },
  },
})

interface BadgeProps
  extends Omit<React.ComponentProps<"span">, "color">,
    VariantProps<typeof badgeVariants> {
  ref?: React.Ref<HTMLSpanElement>
  dataTheme?: DataTheme
}

const Badge = (props: BadgeProps) => {
  const { className, color, variant, size, dataTheme, ref, ...otherProps } = props

  const getClassNames = useMemo(
    () =>
      badgeVariants({
        color,
        variant,
        size,
        className,
      }),
    [color, variant, size, className],
  )

  return (
    <span
      ref={ref}
      data-slot="badge"
      data-theme={dataTheme}
      className={getClassNames}
      {...otherProps}
    />
  )
}

export { Badge }
export type { BadgeProps }
