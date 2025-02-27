"use client"

import { ReactNode, useMemo } from "react"
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { generateClassNames } from "../../utils/classes"
import { Loader } from "../loader"
import { useProviderContext } from "../provider"
import {
  ComponentColor,
  ComponentShape,
  ComponentSize,
  ComponentVariantMap,
  DataTheme,
} from "../types"

type ComponentVariant = "outline" | "soft" | "dash" | "ghost" | "link"

interface ButtonVariantProps {
  color?: ComponentColor
  variant?: ComponentVariant
  size?: ComponentSize
  shape?: ComponentShape
  active?: boolean
  fullWidth?: boolean
  isDisabled?: boolean
  isPending?: boolean
}

export interface ButtonProps extends AriaButtonProps, ButtonVariantProps {
  ref?: React.Ref<HTMLButtonElement>
  dataTheme?: DataTheme
  /**
   * Loader to display when pending.
   */
  loader?: ReactNode
  /**
   * The loader placement.
   * @default "start"
   */
  loaderPlacement?: "start" | "end"
}

// const matchClasses = ["btn"]

export const Button = (props: ButtonProps) => {
  const {
    className,
    color,
    variant,
    size,
    shape,
    active,
    fullWidth,
    isDisabled,
    isPending,
    dataTheme,
    loaderPlacement = "start",
    loader = <Loader size={size} />,
    ref,
    ...otherProps
  } = props

  const globalContext = useProviderContext()
  const prefix = globalContext?.prefix
  // const addPrefix = (className = "") => addClassPrefix(prefix, className, matchClasses)

  const buttonVariants = useMemo<ComponentVariantMap>(
    () => ({
      base: prefix ? "vela-btn" : "btn",
      size: {
        xs: prefix ? "vela-btn-xs" : "btn-xs",
        sm: prefix ? "vela-btn-sm" : "btn-sm",
        md: prefix ? "vela-btn-md" : "btn-md",
        lg: prefix ? "vela-btn-lg" : "btn-lg",
        xl: prefix ? "vela-btn-xl" : "btn-xl",
      },
      variant: {
        outline: prefix ? "vela-btn-outline" : "btn-outline",
        soft: prefix ? "vela-btn-soft" : "btn-soft",
        dash: prefix ? "vela-btn-dash" : "btn-dash",
        ghost: prefix ? "vela-btn-ghost" : "btn-ghost",
        link: prefix ? "vela-btn-link" : "btn-link",
      },
      color: {
        neutral: prefix ? "vela-btn-neutral" : "btn-neutral",
        primary: prefix ? "vela-btn-primary" : "btn-primary",
        secondary: prefix ? "vela-btn-secondary" : "btn-secondary",
        accent: prefix ? "vela-btn-accent" : "btn-accent",
        info: prefix ? "vela-btn-info" : "btn-info",
        success: prefix ? "vela-btn-success" : "btn-success",
        warning: prefix ? "vela-btn-warning" : "btn-warning",
        error: prefix ? "vela-btn-error" : "btn-error",
      },
      shape: {
        square: prefix ? "vela-btn-square" : "btn-square",
        circle: prefix ? "vela-btn-circle" : "btn-circle",
      },
      active: prefix ? "vela-btn-active" : "btn-active",
      fullWidth: prefix ? "vela-btn-block" : "btn-block",
      fullRounded: prefix ? "vela-btn-rounded" : "btn-rounded",
      isDisabled: prefix ? "vela-btn-disabled" : "btn-disabled",
      isPending: prefix ? "vela-btn-pending" : "btn-pending",
    }),
    [prefix],
  )

  const getClassNames = useMemo(
    () =>
      generateClassNames(buttonVariants, {
        color,
        variant,
        size,
        shape,
        active,
        fullWidth,
        isDisabled,
        isPending,
      }),
    [color, variant, size, shape, active, fullWidth, isDisabled, isPending, buttonVariants],
  )

  return (
    <AriaButton
      ref={ref}
      data-slot="button"
      data-theme={dataTheme}
      className={composeRenderProps(className, (className) => twMerge(getClassNames, className))}
      isDisabled={isDisabled}
      isPending={isPending}
      {...otherProps}
    >
      {(values) => (
        <>
          {isPending && loaderPlacement === "start" && loader}
          {typeof props.children === "function" ? props.children(values) : props.children}
          {isPending && loaderPlacement === "end" && loader}
        </>
      )}
    </AriaButton>
  )
}
