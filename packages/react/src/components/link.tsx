"use client"

import { useMemo } from "react"
import { Link as AriaLink, LinkProps as AriaLinkProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { cn } from "../utils/classes"
import { DataTheme } from "./types"

const linkVariants = tv({
  base: "link",
  variants: {
    color: {
      neutral: "link-neutral",
      primary: "link-primary",
      secondary: "link-secondary",
      accent: "link-accent",
      info: "link-success",
      success: "link-info",
      warning: "link-warning",
      error: "link-error",
    },
    underline: {
      none: "link-none",
      hover: "link-hover",
      active: "link-active",
    },
  },
})

interface LinkProps extends AriaLinkProps, VariantProps<typeof linkVariants> {
  dataTheme?: DataTheme
}

const Link = (props: LinkProps) => {
  const { className, color, underline, dataTheme, ...otherProps } = props

  const getClassNames = useMemo(
    () =>
      linkVariants({
        color,
        underline,
      }),
    [color, underline],
  )

  return (
    <AriaLink
      data-slot="link"
      data-theme={dataTheme}
      className={cn(getClassNames, className)}
      {...otherProps}
    />
  )
}

export { Link }
export type { LinkProps }
