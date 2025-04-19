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
  label?: string
  description?: string
  errorMessage?: string | ((validation: AriaValidationResult) => string)
}

const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      className={composeTailwindRenderProps(className, "flex flex-col gap-2")}
      {...props}
    >
      {props.label && <Label>{props.label}</Label>}
      {props.children as React.ReactNode}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
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
  dataTheme?: DataTheme
}

const Checkbox = ({ className, color, size, children, dataTheme, ...props }: CheckboxProps) => (
  <AriaCheckbox
    {...props}
    data-theme={dataTheme}
    className={composeRenderProps(className, (className) => cn("checkbox-wrapper", className))}
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
