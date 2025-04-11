"use client"

import { useMemo } from "react"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { DataTheme } from "./types"

const loaderVariants = tv({
  base: "loading",
  variants: {
    variant: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
      xl: "loading-xl",
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
  },
})

interface LoaderProps
  extends Omit<React.ComponentProps<"span">, "color">,
    VariantProps<typeof loaderVariants> {
  ref?: React.Ref<HTMLSpanElement>
  dataTheme?: DataTheme
}

const Loader = (props: LoaderProps) => {
  const { className, color, variant, size, dataTheme, ref, ...otherProps } = props

  const getClassNames = useMemo(
    () =>
      loaderVariants({
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
      role="presentation"
      data-slot="loading"
      data-theme={dataTheme}
      className={getClassNames}
      {...otherProps}
    />
  )
}

export { Loader }
export type { LoaderProps }
