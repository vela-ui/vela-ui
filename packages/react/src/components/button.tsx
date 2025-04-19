"use client"

import { ReactNode, useMemo } from "react"
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { cn } from "../utils/classes"
import { Loader } from "./loader"
import { DataTheme } from "./types"

const buttonVariants = tv({
  base: "btn",
  variants: {
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    variant: {
      outline: "btn-outline",
      soft: "btn-soft",
      dash: "btn-dash",
      ghost: "btn-ghost",
      link: "btn-link",
    },
    color: {
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    },
    shape: {
      square: "btn-square",
      circle: "btn-circle",
    },
    fullWidth: {
      true: "btn-block",
    },
    isDisabled: {
      true: "btn-disabled",
    },
    isPending: {
      true: "btn-pending",
    },
  },
})

interface ButtonProps extends AriaButtonProps, VariantProps<typeof buttonVariants> {
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

const Button = (props: ButtonProps) => {
  const {
    className,
    color,
    variant,
    size,
    shape,
    fullWidth,
    isDisabled,
    isPending,
    dataTheme,
    loaderPlacement = "start",
    loader = <Loader size={size} />,
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
        isPending,
      }),
    [color, variant, size, shape, fullWidth, isDisabled, isPending],
  )

  return (
    <AriaButton
      data-slot="button"
      data-theme={dataTheme}
      className={composeRenderProps(className, (className) => cn(getClassNames, className))}
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

export { Button, buttonVariants }
export type { ButtonProps }
