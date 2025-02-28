"use client"

import { useMemo } from "react"
import type { LinkProps as AriaLinkProps } from "react-aria-components"
import { Link as AriaLink, composeRenderProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { generateClassNames } from "../../utils/classes"
import { DataTheme } from "../types"
import { ButtonVariantProps } from "./button"
import { useVariantsConfig } from "./use-variants-config"

export interface LinkButtonProps
  extends AriaLinkProps,
    Omit<ButtonVariantProps, "isPending" | "active"> {
  ref?: React.Ref<HTMLAnchorElement>
  dataTheme?: DataTheme
}

export const LinkButton = (props: LinkButtonProps) => {
  const {
    className,
    color,
    variant,
    size,
    shape,
    fullWidth,
    isDisabled,
    dataTheme,
    ref,
    ...otherProps
  } = props

  const variantsConfig = useVariantsConfig()

  const getClassNames = useMemo(
    () =>
      generateClassNames(variantsConfig, {
        color,
        variant,
        size,
        shape,
        fullWidth,
        isDisabled,
      }),
    [color, variant, size, shape, fullWidth, isDisabled, variantsConfig],
  )

  return (
    <AriaLink
      ref={ref}
      data-slot="link"
      data-theme={dataTheme}
      className={composeRenderProps(className, (className) => twMerge(getClassNames, className))}
      {...otherProps}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </AriaLink>
  )
}
