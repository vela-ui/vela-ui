"use client"

import type { TextFieldProps, TextProps, ValidationResult } from "react-aria-components"
import {
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Label as AriaLabel,
  Text as AriaText,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"

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

const Group = AriaGroup

export { Description, FieldError, fieldVariants, Group, Label }
export type { DescriptionProps, FieldErrorProps, FieldProps, LabelProps, TextProps }
