"use client"

import type { TextFieldProps, TextProps, ValidationResult } from "react-aria-components"
import {
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Label as AriaLabel,
  Text as AriaText,
  composeRenderProps,
  TextField,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"

interface FieldProps {
  placeholder?: string
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  "aria-label"?: TextFieldProps["aria-label"]
  "aria-labelledby"?: TextFieldProps["aria-labelledby"]
}

const fieldVariants = tv({
  slots: {
    label:
      "group-data-[invalid]:text-destructive flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    description: "text-muted-foreground text-sm",
    fieldError: "text-destructive text-sm",
  },
})

const { label, description, fieldError } = fieldVariants()

type LabelProps = React.ComponentProps<typeof AriaLabel>
function Label({ className, ...props }: LabelProps) {
  return <AriaLabel data-slot="label" className={label({ className })} {...props} />
}

type DescriptionProps = Omit<React.ComponentProps<typeof AriaText>, "slot">
function Description({ className, ...props }: DescriptionProps) {
  return <AriaText slot="description" className={description({ className })} {...props} />
}

type FieldErrorProps = React.ComponentProps<typeof AriaFieldError>
function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <AriaFieldError
      className={composeRenderProps(className, (className) => fieldError({ className }))}
      {...props}
    />
  )
}

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

type FieldGroupProps = React.ComponentProps<typeof AriaGroup> &
  VariantProps<typeof fieldGroupVariants>
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

export { Description, FieldError, FieldGroup, fieldVariants, Label, TextField }
export type {
  DescriptionProps,
  FieldErrorProps,
  FieldGroupProps,
  FieldProps,
  LabelProps,
  TextProps,
}
