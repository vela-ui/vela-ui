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
import { ComponentColor, ComponentShape, ComponentSize, DataTheme } from "../types"
import { useVariantsConfig } from "./use-variants-config"

export type ComponentVariant = "outline" | "soft" | "dash" | "ghost" | "link"

export interface ButtonVariantProps {
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

  const variantsConfig = useVariantsConfig()

  const getClassNames = useMemo(
    () =>
      generateClassNames(variantsConfig, {
        color,
        variant,
        size,
        shape,
        active,
        fullWidth,
        isDisabled,
        isPending,
      }),
    [color, variant, size, shape, active, fullWidth, isDisabled, isPending, variantsConfig],
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
