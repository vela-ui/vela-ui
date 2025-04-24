"use client"

import { useMemo } from "react"
import type { LinkProps as AriaLinkProps } from "react-aria-components"
import { Link as AriaLink, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { cn } from "../utils/classes"
import { buttonVariants } from "./button"
import { DataTheme } from "./types"

interface LinkButtonProps
  extends AriaLinkProps,
    Omit<VariantProps<typeof buttonVariants>, "isPending" | "isActive"> {
  ref?: React.Ref<HTMLAnchorElement>
  dataTheme?: DataTheme
}

const LinkButton = (props: LinkButtonProps) => {
  const {
    ref,
    className,
    color,
    variant,
    size,
    shape,
    fullWidth,
    isDisabled,
    dataTheme,
    ...otherProps
  } = props

  const getClassNames = useMemo(
    () =>
      buttonVariants({
        color,
        variant,
        size,
        shape,
        fullWidth,
        isDisabled,
      }),
    [color, variant, size, shape, fullWidth, isDisabled],
  )

  return (
    <AriaLink
      ref={ref}
      data-theme={dataTheme}
      className={composeRenderProps(className, (className) => cn(getClassNames, className))}
      {...otherProps}
    />
  )
}

export { LinkButton }
export type { LinkButtonProps }
