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
import { cn } from "../utils/classes"
import { DataTheme } from "./types"

const fieldVariants = tv({
  slots: {
    label: "text-base-content w-fit cursor-default text-sm font-medium",
    description: "text-base-content/60 text-[0.8125rem]",
    fieldError: "text-error text-[0.8125rem] forced-colors:text-[Mark]",
  },
})

const { label, description, fieldError } = fieldVariants()

const Label = ({ className, ...props }: LabelProps) => (
  <AriaLabel className={label({ className })} {...props} />
)

const Description = ({ className, ...props }: TextProps) => (
  <AriaText slot="description" className={description({ className })} {...props} />
)

const FieldError = ({ className, ...props }: FieldErrorProps) => (
  <AriaFieldError
    className={composeRenderProps(className, (className) => cn(fieldError(), className))}
    {...props}
  />
)

const fieldGroupVariants = tv({
  base: "group rounded-field border-base-content/20 relative flex h-10 items-center overflow-hidden border",
  variants: {
    isFocusWithin: {
      true: "border-base-content forced-colors:border-[Highlight]",
    },
    isInvalid: {
      true: "border-error forced-colors:border-[Mark]",
    },
    isDisabled: {
      true: "opacity-50 forced-colors:border-[GrayText]",
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
  dataTheme?: DataTheme
  /**
   * Element to be rendered in the left side of the input.
   */
  startContent?: React.ReactNode
  /**
   * Element to be rendered in the right side of the input.
   */
  endContent?: React.ReactNode
}

const Input = ({
  ref,
  className,
  color,
  size,
  startContent,
  endContent,
  dataTheme,
  ...props
}: InputProps) => {
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
        data-theme={dataTheme}
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
      data-theme={dataTheme}
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
  dataTheme?: DataTheme
}

const TextArea = ({ ref, className, color, size, dataTheme, ...props }: TextAreaProps) => (
  <AriaTextArea
    ref={ref}
    data-theme={dataTheme}
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
