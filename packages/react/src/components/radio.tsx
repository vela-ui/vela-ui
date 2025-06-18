"use client"

import type { ValidationResult } from "react-aria-components"
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { CircleIcon } from "../icons"
import { focusRing } from "../lib/classes"
import { cn, composeTailwindRenderProps } from "../lib/utils"
import { Description, FieldError, Label } from "./field"

type RadioGroupRootProps = React.ComponentProps<typeof AriaRadioGroup>
function RadioGroupRoot({ className, ...props }: RadioGroupRootProps) {
  return (
    <AriaRadioGroup
      data-slot="radio-group"
      className={composeTailwindRenderProps(className, "group flex flex-col gap-2")}
      {...props}
    />
  )
}

type RadioGroupProps = RadioGroupRootProps & {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  wrapperClassName?: string
}
function RadioGroup({
  wrapperClassName,
  children,
  label,
  description,
  errorMessage,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupRoot {...props}>
      {composeRenderProps(children, (children) => (
        <>
          {label && <Label>{label}</Label>}
          <div
            data-slot="radio-group-wrapper"
            className={cn(
              "flex gap-2 select-none group-data-[orientation=horizontal]:flex-wrap group-data-[orientation=vertical]:flex-col",
              wrapperClassName,
            )}
          >
            {children}
          </div>
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </RadioGroupRoot>
  )
}

const radioVariants = tv({
  base: "group flex items-center gap-2 text-sm transition",
  variants: {
    isDisabled: {
      true: "text-foreground/50 cursor-not-allowed",
    },
  },
})

const radioIndicatorVariants = tv({
  extend: focusRing,
  base: "border-input text-primary dark:bg-input/30 relative flex aspect-square shrink-0 items-center justify-center rounded-full border shadow-xs transition-[color,box-shadow]",
  variants: {
    size: {
      sm: "size-4 [&_svg]:size-2",
      md: "size-5 [&_svg]:size-2.5",
      lg: "size-6 [&_svg]:size-3",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

type RadioProps = React.ComponentProps<typeof AriaRadio> & {
  indicatorClassName?: string
  size?: "sm" | "md" | "lg"
}
function Radio({ className, children, indicatorClassName, size, ...props }: RadioProps) {
  return (
    <AriaRadio
      className={composeRenderProps(className, (className, renderProps) =>
        radioVariants({ ...renderProps, className }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { isSelected, ...renderProps }) => (
        <>
          <div
            data-slot="radio-indicator"
            className={radioIndicatorVariants({
              size,
              ...renderProps,
              className: indicatorClassName,
            })}
          >
            {isSelected ? (
              <CircleIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-current" />
            ) : null}
          </div>
          {children}
        </>
      ))}
    </AriaRadio>
  )
}

export { Radio, RadioGroup, RadioGroupRoot }
export type { RadioGroupProps, RadioGroupRootProps, RadioProps }
