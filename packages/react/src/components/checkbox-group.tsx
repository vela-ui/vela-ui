"use client"

import type { ValidationResult } from "react-aria-components"
import { CheckboxGroup as AriaCheckboxGroup, composeRenderProps } from "react-aria-components"
import { composeTailwindRenderProps } from "../lib/utils"
import { Description, FieldError, Label } from "./field"

type CheckboxGroupRootProps = React.ComponentProps<typeof AriaCheckboxGroup>
function CheckboxGroupRoot({ className, ...props }: CheckboxGroupRootProps) {
  return (
    <AriaCheckboxGroup
      data-slot="checkbox-group"
      className={composeTailwindRenderProps(className, "group flex flex-col gap-2")}
      {...props}
    />
  )
}

type CheckboxGroupProps = CheckboxGroupRootProps & {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}
function CheckboxGroup({
  children,
  label,
  description,
  errorMessage,
  ...props
}: CheckboxGroupProps) {
  return (
    <CheckboxGroupRoot {...props}>
      {composeRenderProps(children, (children) => (
        <>
          {label && <Label>{label}</Label>}
          {children}
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </CheckboxGroupRoot>
  )
}

export { CheckboxGroup, CheckboxGroupRoot }
export type { CheckboxGroupProps, CheckboxGroupRootProps }
