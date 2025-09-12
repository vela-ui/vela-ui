"use client"

import { TextField as AriaTextField, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { Description, FieldError, FieldProps, Label } from "./field"
import { Input, InputGroup, type InputGroupProps } from "./input"

const textFieldVariants = tv({
  base: "group flex flex-col gap-2",
})

interface TextFieldProps
  extends FieldProps,
    React.ComponentProps<typeof AriaTextField>,
    VariantProps<typeof textFieldVariants>,
    Pick<InputGroupProps, "size" | "startElement" | "endElement" | "startAddon" | "endAddon"> {
  inputClassName?: string
}

function TextField({
  placeholder,
  label,
  description,
  errorMessage,
  size,
  className,
  inputClassName,
  startElement,
  endElement,
  startAddon,
  endAddon,
  ...props
}: TextFieldProps) {
  return (
    <AriaTextField
      className={composeRenderProps(className, (className) => textFieldVariants({ className }))}
      {...props}
    >
      {label && <Label>{label}</Label>}
      <InputGroup
        size={size}
        startElement={startElement}
        endElement={endElement}
        startAddon={startAddon}
        endAddon={endAddon}
      >
        <Input placeholder={placeholder} className={inputClassName} />
      </InputGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaTextField>
  )
}

export { TextField }
export type { TextFieldProps }
