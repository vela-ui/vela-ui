import { cloneElement, isValidElement, ReactNode, useMemo } from "react"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../icons"
import { cn } from "../utils/classes"
import { DataTheme } from "./types"

const alertVariants = tv({
  base: "alert",
  variants: {
    variant: {
      outline: "alert-outline",
      dash: "alert-dash",
      soft: "alert-soft",
    },
    color: {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    direction: {
      vertical: "alert-vertical",
      horizontal: "alert-horizontal",
    },
    responsive: {
      true: "alert-vertical sm:alert-horizontal",
    },
  },
})

interface AlertProps
  extends Omit<React.ComponentProps<"div">, "color">,
    VariantProps<typeof alertVariants> {
  ref?: React.Ref<HTMLDivElement>
  dataTheme?: DataTheme
  /**
   * Icon to be displayed in the alert - overrides the default icon
   */
  icon?: ReactNode
  /**
   * Icon class name to be applied to the icon
   */
  iconClassName?: string
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

const Alert = (props: AlertProps) => {
  const {
    className,
    iconClassName,
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

  const customIcon = icon && isValidElement(icon) ? cloneElement(icon) : null

  const IconComponent = iconMap[color || "info"]

  const getClassNames = useMemo(
    () =>
      alertVariants({
        color,
        variant,
        direction,
        responsive,
        className,
      }),
    [color, variant, direction, responsive, className],
  )

  return (
    <div
      ref={ref}
      role="alert"
      data-slot="alert"
      data-theme={dataTheme}
      className={getClassNames}
      {...otherProps}
    >
      {!hideIcon &&
        (customIcon || (
          <IconComponent className={cn("size-6 shrink-0 fill-current", iconClassName)} />
        ))}
      {props.children}
    </div>
  )
}

export { Alert }
export type { AlertProps }
