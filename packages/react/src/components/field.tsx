"use client"

import type {
  GroupProps as AriaGroupProps,
  FieldErrorProps,
  LabelProps,
  TextFieldProps,
  TextProps,
  ValidationResult,
} from "react-aria-components"
import {
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Label as AriaLabel,
  Text as AriaText,
  TextField as AriaTextField,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"

interface FieldProps {
  label?: string
  placeholder?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  "aria-label"?: TextFieldProps["aria-label"]
  "aria-labelledby"?: TextFieldProps["aria-labelledby"]
}

const fieldVariants = tv({
  slots: {
    label:
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    description: "text-muted-foreground text-sm",
    fieldError: "text-destructive text-sm",
  },
})

const { label, description, fieldError } = fieldVariants()

const Label = ({ className, ...props }: LabelProps) => (
  <AriaLabel data-slot="label" className={label({ className })} {...props} />
)

const Description = ({ className, ...props }: TextProps) => (
  <AriaText slot="description" className={description({ className })} {...props} />
)

const FieldError = ({ className, ...props }: FieldErrorProps) => (
  <AriaFieldError
    className={composeRenderProps(className, (className) => fieldError({ className }))}
    {...props}
  />
)

const fieldGroupVariants = tv({
  extend: focusRing,
  base: "group border-input relative flex h-10 items-center overflow-hidden rounded-lg border shadow-xs",
  variants: {
    isFocusWithin: {
      true: "border-ring",
    },
    isInvalid: {
      true: "border-destructive",
    },
    isDisabled: {
      true: "opacity-50",
    },
  },
})

interface FieldGroupProps extends AriaGroupProps, VariantProps<typeof fieldGroupVariants> {}

function FieldGroup({ className, ...props }: FieldGroupProps) {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className, renderProps) =>
        fieldGroupVariants({
          ...renderProps,
          className,
        }),
      )}
      {...props}
    />
  )
}

const TextField = AriaTextField

export { Description, FieldError, FieldGroup, Label, TextField }
export type { FieldErrorProps, FieldGroupProps, FieldProps, LabelProps, TextProps }
