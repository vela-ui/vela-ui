"use client"

import type {
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { CheckIcon, MinusIcon } from "../icons"
import { cn, composeTailwindRenderProps } from "../utils/classes"
import { Description, FieldError, Label } from "./field"
import { DataTheme } from "./types"

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  ref?: React.Ref<HTMLDivElement>
  label?: string
  description?: string
  errorMessage?: string | ((validation: AriaValidationResult) => string)
}

const CheckboxGroup = ({
  ref,
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      ref={ref}
      className={composeTailwindRenderProps(className, "flex flex-col gap-2")}
      {...props}
    >
      {label && <Label>{label}</Label>}
      {children as React.ReactNode}
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaCheckboxGroup>
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
  dataTheme?: DataTheme
}

const Checkbox = ({
  ref,
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
    className={composeRenderProps(className, (className) => cn("checkbox-wrapper", className))}
    {...props}
  >
    {(renderProps) => (
      <>
        <div
          className={checkboxVariants({
            color,
            size,
          })}
        >
          {renderProps.isIndeterminate ? (
            <MinusIcon aria-hidden />
          ) : renderProps.isSelected ? (
            <CheckIcon aria-hidden strokeWidth={3} />
          ) : null}
        </div>
        {children}
      </>
    )}
  </AriaCheckbox>
)

export { Checkbox, CheckboxGroup }
export type { CheckboxGroupProps, CheckboxProps }
