"use client"

import type { CheckboxProps as AriaCheckboxProps } from "react-aria-components"
import { Checkbox as AriaCheckbox, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { CheckIcon, MinusIcon } from "../icons"
import { focusRing } from "../lib/classes"

const checkboxVariants = tv({
  base: "group relative flex items-center gap-2 text-sm transition",
  variants: {
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
})

const checkboxIndicatorVariants = tv({
  extend: focusRing,
  base: "peer border-input dark:bg-input/30 flex shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-shadow [&_svg]:size-full",
  variants: {
    size: {
      sm: "size-4",
      md: "size-5 p-0.5",
      lg: "size-6 p-0.5",
    },
    isSelected: {
      true: "bg-primary dark:bg-primary text-primary-foreground border-primary",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

interface CheckboxProps extends AriaCheckboxProps, VariantProps<typeof checkboxVariants> {
  indicatorClassName?: string
  size?: "sm" | "md" | "lg"
}

const Checkbox = ({ className, children, indicatorClassName, size, ...props }: CheckboxProps) => (
  <AriaCheckbox
    className={composeRenderProps(className, (className, renderProps) =>
      checkboxVariants({ ...renderProps, className }),
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { isSelected, isIndeterminate, ...renderProps }) => (
      <>
        <div
          data-slot="checkbox-indicator"
          className={checkboxIndicatorVariants({
            isSelected: isSelected || isIndeterminate,
            size,
            ...renderProps,
            className: indicatorClassName,
          })}
        >
          {isIndeterminate ? <MinusIcon /> : isSelected ? <CheckIcon /> : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
)

export { Checkbox }
export type { CheckboxProps }
