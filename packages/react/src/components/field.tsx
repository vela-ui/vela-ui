"use client"

import { useMemo } from "react"
import type {
  GroupProps as AriaGroupProps,
  InputProps as AriaInputProps,
  TextAreaProps as AriaTextAreaProps,
  FieldErrorProps,
  LabelProps,
  TextFieldProps,
  TextProps,
} from "react-aria-components"
import {
  FieldError as AriaFieldError,
  Group as AriaGroup,
  Input as AriaInput,
  Label as AriaLabel,
  Text as AriaText,
  TextArea as AriaTextArea,
  composeRenderProps,
  TextField,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"
import { cn } from "../lib/utils"

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

const inputVariants = tv({
  base: "input",
  variants: {
    color: {
      neutral: "input-neutral",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
    },
    size: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
      xl: "input-xl",
    },
    ghost: {
      true: "input-ghost",
    },
  },
})

interface InputProps
  extends Omit<AriaInputProps, "color" | "size">,
    VariantProps<typeof inputVariants> {
  ref?: React.Ref<HTMLInputElement>
  /**
   * Element to be rendered in the left side of the input.
   */
  startContent?: React.ReactNode
  /**
   * Element to be rendered in the right side of the input.
   */
  endContent?: React.ReactNode
}

const Input = ({ ref, className, color, size, startContent, endContent, ...props }: InputProps) => {
  const getClassNames = useMemo(
    () =>
      inputVariants({
        color,
        size,
      }),
    [color, size],
  )

  if (startContent || endContent) {
    return (
      <div
        className={inputVariants({
          color,
          size,
        })}
      >
        {startContent}
        <AriaInput ref={ref} className={className} {...props} />
        {endContent}
      </div>
    )
  }

  return (
    <AriaInput
      ref={ref}
      className={composeRenderProps(className, (className) => cn(getClassNames, className))}
      {...props}
    />
  )
}

const textAreaVariants = tv({
  base: "textarea",
  variants: {
    color: {
      neutral: "textarea-neutral",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
    size: {
      xs: "textarea-xs",
      sm: "textarea-sm",
      md: "textarea-md",
      lg: "textarea-lg",
      xl: "textarea-xl",
    },
    ghost: {
      true: "textarea-ghost",
    },
  },
})

interface TextAreaProps
  extends Omit<AriaTextAreaProps, "color">,
    VariantProps<typeof textAreaVariants> {
  ref?: React.Ref<HTMLTextAreaElement>
}

const TextArea = ({ ref, className, color, size, ...props }: TextAreaProps) => (
  <AriaTextArea
    ref={ref}
    className={composeRenderProps(className, (className) =>
      textAreaVariants({
        color,
        size,
        className,
      }),
    )}
    {...props}
  />
)

export { Description, FieldError, FieldGroup, Input, Label, TextArea, TextField }
export type {
  FieldErrorProps,
  FieldGroupProps,
  InputProps,
  LabelProps,
  TextAreaProps,
  TextFieldProps,
  TextProps,
}
