"use client"

import { useMemo } from "react"
import { Link as AriaLink, LinkProps as AriaLinkProps } from "react-aria-components"
import { cn, generateClassNames } from "../../utils/classes"
import { useProviderContext } from "../provider"
import { ComponentColor, ComponentVariantMap, DataTheme } from "../types"

interface LinkVariantProps {
  color?: ComponentColor
  underline?: "none" | "hover" | "active"
}

export interface LinkProps extends AriaLinkProps, LinkVariantProps {
  ref?: React.Ref<HTMLAnchorElement>
  dataTheme?: DataTheme
}

export const Link = (props: LinkProps) => {
  const { className, color, underline, dataTheme, ref, ...otherProps } = props

  const globalContext = useProviderContext()
  const prefix = globalContext?.prefix

  const variantsConfig = useMemo<ComponentVariantMap>(
    () => ({
      base: prefix ? "vela-link" : "link",
      color: {
        neutral: prefix ? "vela-link-neutral" : "link-neutral",
        primary: prefix ? "vela-link-primary" : "link-primary",
        secondary: prefix ? "vela-link-secondary" : "link-secondary",
        accent: prefix ? "vela-link-accent" : "link-accent",
        info: prefix ? "vela-link-success" : "link-success",
        success: prefix ? "vela-link-info" : "link-info",
        warning: prefix ? "vela-link-warning" : "link-warning",
        error: prefix ? "vela-link-error" : "link-error",
      },
      underline: {
        none: prefix ? "vela-link-none" : "link-none",
        hover: prefix ? "vela-link-hover" : "link-hover",
        active: prefix ? "vela-link-active" : "link-active",
      },
    }),
    [prefix],
  )

  const getClassNames = useMemo(
    () =>
      generateClassNames(variantsConfig, {
        color,
        underline,
      }),
    [color, underline, variantsConfig],
  )

  return (
    <AriaLink
      ref={ref}
      data-slot="link"
      data-theme={dataTheme}
      className={cn(getClassNames, className)}
      {...otherProps}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </AriaLink>
  )
}
