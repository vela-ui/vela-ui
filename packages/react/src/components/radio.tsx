"use client"

import type {
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
} from "react-aria-components"
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { cn, composeTailwindRenderProps } from "../utils/classes"
import { Description, FieldError, Label } from "./field"
import { DataTheme } from "./types"

interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  ref?: React.Ref<HTMLDivElement>
  children?: React.ReactNode
  label?: string
  description?: string
  errorMessage?: string | ((validation: AriaValidationResult) => string)
}

const RadioGroup = ({
  ref,
  className,
  label,
  description,
  errorMessage,
  children,
  ...props
}: RadioGroupProps) => {
  return (
    <AriaRadioGroup
      ref={ref}
      className={composeTailwindRenderProps(className, "group flex flex-col gap-2")}
      {...props}
    >
      {label && <Label>{label}</Label>}
      <div className="flex gap-2 select-none group-data-[orientation=horizontal]:flex-wrap group-data-[orientation=vertical]:flex-col">
        {children}
      </div>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  )
}

const radioVariants = tv({
  base: "radio",
  variants: {
    color: {
      neutral: "radio-neutral",
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      info: "radio-info",
      success: "radio-success",
      warning: "radio-warning",
      error: "radio-error",
    },
    size: {
      xs: "radio-xs",
      sm: "radio-sm",
      md: "radio-md",
      lg: "radio-lg",
      xl: "radio-xl",
    },
  },
})

interface RadioProps extends AriaRadioProps, VariantProps<typeof radioVariants> {
  ref?: React.Ref<HTMLLabelElement>
  dataTheme?: DataTheme
}

const Radio = ({ ref, className, color, size, children, dataTheme, ...props }: RadioProps) => (
  <AriaRadio
    ref={ref}
    data-theme={dataTheme}
    className={composeRenderProps(className, (className) => cn("radio-wrapper", className))}
    {...props}
  >
    <>
      <div
        className={radioVariants({
          color,
          size,
        })}
      />
      {children}
    </>
  </AriaRadio>
)

export { Radio, RadioGroup }
export type { RadioGroupProps, RadioProps }
