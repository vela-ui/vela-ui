"use client"

import type {
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps as AriaCheckboxProps,
  ValidationResult,
} from "react-aria-components"
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { CheckIcon, MinusIcon } from "../icons"
import { focusRing } from "../lib/classes"
import { composeTailwindRenderProps } from "../lib/utils"
import { Description, FieldError, Label } from "./field"

interface CheckboxGroupProps extends AriaCheckboxGroupProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

const CheckboxGroup = ({
  className,
  children,
  label,
  description,
  errorMessage,
  ...props
}: CheckboxGroupProps) => {
  return (
    <AriaCheckboxGroup
      className={composeTailwindRenderProps(className, "flex flex-col gap-2")}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {label && <Label>{label}</Label>}
          {children}
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </AriaCheckboxGroup>
  )
}

const checkboxVariants = tv({
  base: "group flex items-center gap-2 text-sm transition",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
})

const checkboxIndicatorVariants = tv({
  extend: focusRing,
  base: "peer border-input dark:bg-input/30 size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow [&_svg]:size-3.5",
  variants: {
    isSelected: {
      true: "bg-primary text-primary-foreground border-primary",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
})

interface CheckboxProps extends AriaCheckboxProps, VariantProps<typeof checkboxVariants> {}

const Checkbox = ({ className, children, ...props }: CheckboxProps) => (
  <AriaCheckbox
    data-slot="checkbox"
    className={composeRenderProps(className, (className, renderProps) =>
      checkboxVariants({ ...renderProps, className }),
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { isSelected, isIndeterminate, ...renderProps }) => (
      <>
        <div
          data-slot="checkbox-indicator"
          className={checkboxIndicatorVariants({
            isSelected: isSelected || isIndeterminate,
            ...renderProps,
          })}
        >
          {isIndeterminate ? <MinusIcon /> : isSelected ? <CheckIcon /> : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
)

export { Checkbox, CheckboxGroup }
export type { CheckboxGroupProps, CheckboxProps }
