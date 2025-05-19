"use client"

import type {
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { cn, composeTailwindRenderProps } from "../utils/classes"
import { DataTheme } from "./types"

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  ref?: React.Ref<HTMLDivElement>
}

const CheckboxGroup = ({ ref, className, ...props }: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      ref={ref}
      className={composeTailwindRenderProps(className, "group flex flex-col gap-2")}
      {...props}
    />
  )
}

const checkboxVariants = tv({
  base: "checkbox",
  variants: {
    color: {
      neutral: "checkbox-neutral",
      primary: "checkbox-primary",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      info: "checkbox-info",
      success: "checkbox-success",
      warning: "checkbox-warning",
      error: "checkbox-error",
    },
    size: {
      xs: "checkbox-xs",
      sm: "checkbox-sm",
      md: "checkbox-md",
      lg: "checkbox-lg",
      xl: "checkbox-xl",
    },
  },
})

interface CheckboxProps extends AriaCheckboxProps, VariantProps<typeof checkboxVariants> {
  ref?: React.Ref<HTMLLabelElement>
  wrapperClassName?: string
  dataTheme?: DataTheme
}

const Checkbox = ({
  ref,
  wrapperClassName,
  className,
  color,
  size,
  children,
  dataTheme,
  ...props
}: CheckboxProps) => (
  <AriaCheckbox
    ref={ref}
    data-theme={dataTheme}
    className={composeRenderProps(wrapperClassName, (className) =>
      cn("checkbox-wrapper", className),
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        <div
          className={cn(
            checkboxVariants({
              color,
              size,
            }),
            className,
          )}
        />
        {children}
      </>
    ))}
  </AriaCheckbox>
)

export { Checkbox, CheckboxGroup }
export type { CheckboxGroupProps, CheckboxProps }
