"use client"

import {
  ToggleButtonGroup as AriaToggleButtonGroup,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { createContext } from "../lib/context"
import { toggleButtonVariants } from "./toggle-button"

const toggleButtonGroupVariants = tv({
  base: "isolate inline-flex items-center",
  variants: {
    variant: {
      default: "gap-1",
      ghost: "gap-1",
      outline: "[&_button]:rounded-none",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col [&_button]:w-full",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      orientation: "horizontal",
      className:
        "[&_button]:first:rounded-s-md [&_button]:last:rounded-e-md [&_button:not(:first-child)]:-ml-px",
    },
    {
      variant: "outline",
      orientation: "vertical",
      className: "[&_button]:-mt-px [&_button]:first:rounded-t-md [&_button]:last:rounded-b-md",
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
})

const [ToggleGroupProvider, useToggleGroupContext] = createContext<
  VariantProps<typeof toggleButtonVariants>
>({
  name: "ToggleButtonGroupContext",
  strict: false,
})

interface ToggleButtonGroupProps
  extends React.ComponentProps<typeof AriaToggleButtonGroup>,
    VariantProps<typeof toggleButtonVariants> {}

function ToggleButtonGroup({
  className,
  variant,
  size,
  shape,
  orientation = "horizontal",
  ...props
}: ToggleButtonGroupProps) {
  return (
    <ToggleGroupProvider value={{ variant, size, shape }}>
      <AriaToggleButtonGroup
        data-slot="toggle-button-group"
        orientation={orientation}
        className={composeRenderProps(className, (className, renderProps) =>
          toggleButtonGroupVariants({
            ...renderProps,
            orientation,
            variant,
            className,
          }),
        )}
        {...props}
      />
    </ToggleGroupProvider>
  )
}

export { ToggleButtonGroup, useToggleGroupContext }
export type { ToggleButtonGroupProps }
