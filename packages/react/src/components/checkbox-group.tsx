"use client"

import type { ValidationResult } from "react-aria-components"
import { CheckboxGroup as AriaCheckboxGroup, composeRenderProps } from "react-aria-components"
import { composeTailwindRenderProps } from "../lib/utils"
import { Description, FieldError, Label } from "./field"

interface CheckboxGroupProps extends React.ComponentProps<typeof AriaCheckboxGroup> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function CheckboxGroup({
  className,
  children,
  label,
  description,
  errorMessage,
  ...props
}: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      data-slot="checkbox-group"
      className={composeTailwindRenderProps(className, "group flex flex-col gap-2")}
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

export { CheckboxGroup }
export type { CheckboxGroupProps }
