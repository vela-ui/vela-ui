"use client"

import { cloneElement, isValidElement, ReactNode, useMemo } from "react"
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../../icons"
import { cn, generateClassNames } from "../../utils/classes"
import { useProviderContext } from "../provider"
import { ComponentDirection, ComponentStatus, ComponentVariantMap, DataTheme } from "../types"

type ComponentVariant = "outline" | "dash" | "soft"

interface AlertVariantProps {
  variant?: ComponentVariant
  color?: ComponentStatus
  direction?: ComponentDirection
  responsive?: boolean
}

export interface AlertProps extends Omit<React.ComponentProps<"div">, "color">, AlertVariantProps {
  ref?: React.Ref<HTMLDivElement>
  dataTheme?: DataTheme
  /**
   * Icon to be displayed in the alert - overrides the default icon
   */
  icon?: ReactNode
  /**
   * Whether the icon is hidden
   */
  hideIcon?: boolean
}

const iconMap = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
} as const

export const Alert = (props: AlertProps) => {
  const {
    className,
    color,
    variant,
    direction,
    responsive = false,
    hideIcon = false,
    icon,
    dataTheme,
    ref,
    ...otherProps
  } = props

  const globalContext = useProviderContext()
  const prefix = globalContext?.prefix

  const customIcon = icon && isValidElement(icon) ? cloneElement(icon) : null

  const IconComponent = iconMap[color || "info"]

  const variantsConfig = useMemo<ComponentVariantMap>(
    () => ({
      base: prefix ? "vela-alert" : "alert",
      variant: {
        outline: prefix ? "vela-alert-outline" : "alert-outline",
        dash: prefix ? "vela-alert-dash" : "alert-dash",
        soft: prefix ? "vela-alert-soft" : "alert-soft",
      } as Record<ComponentVariant, string>,
      color: {
        info: prefix ? "vela-alert-info" : "alert-info",
        success: prefix ? "vela-alert-success" : "alert-success",
        warning: prefix ? "vela-alert-warning" : "alert-warning",
        error: prefix ? "vela-alert-error" : "alert-error",
      },
      direction: {
        vertical: prefix ? "vela-alert-vertical" : "alert-vertical",
        horizontal: prefix ? "vela-alert-horizontal" : "alert-horizontal",
      },
      responsive: prefix
        ? "vela-alert-vertical sm:vela-alert-horizontal"
        : "alert-vertical sm:alert-horizontal",
    }),
    [prefix],
  )

  const getClassNames = useMemo(
    () =>
      generateClassNames(variantsConfig, {
        color,
        variant,
        direction,
        responsive,
      }),
    [color, variant, direction, responsive, variantsConfig],
  )

  return (
    <div
      ref={ref}
      role="alert"
      data-slot="alert"
      data-theme={dataTheme}
      className={cn(getClassNames, className)}
      {...otherProps}
    >
      {!hideIcon && (customIcon || <IconComponent className="size-6 shrink-0 fill-current" />)}
      {props.children}
    </div>
  )
}
