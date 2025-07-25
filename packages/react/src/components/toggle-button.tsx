"use client"

import { ToggleButton as AriaToggleButton, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { focusRing } from "../lib/classes"
import { useToggleGroupContext } from "./toggle-button-group"

const toggleButtonVariants = tv({
  extend: focusRing,
  base: "inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap transition-all [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default:
        "hover:bg-accent hover:text-accent-foreground data-[selected]:bg-primary data-[selected]:text-primary-foreground bg-transparent",
      outline:
        "border-input hover:bg-accent hover:text-accent-foreground data-[selected]:bg-accent data-[selected]:text-accent-foreground border bg-transparent shadow-xs",
      ghost:
        "data-[selected]:bg-accent data-[selected]:text-accent-foreground hover:bg-accent hover:text-accent-foreground bg-transparent",
    },
    size: {
      xs: "size-8 gap-1 text-xs [&_svg:not([class*='size-'])]:size-4",
      sm: "size-9 gap-2 text-sm [&_svg:not([class*='size-'])]:size-4",
      md: "size-10 gap-2 text-sm [&_svg:not([class*='size-'])]:size-5",
      lg: "size-11 gap-2.5 text-base [&_svg:not([class*='size-'])]:size-5",
      xl: "size-12 gap-2.5 text-base [&_svg:not([class*='size-'])]:size-5",
    },
    shape: {
      rectangle: "",
      square: "",
      circle: "rounded-full",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
    isPending: {
      true: "pointer-events-none opacity-50",
    },
  },
  compoundVariants: [
    {
      size: "xs",
      shape: "rectangle",
      className: "w-auto px-2.5",
    },
    {
      size: "sm",
      shape: "rectangle",
      className: "w-auto px-3.5",
    },
    {
      size: "md",
      shape: "rectangle",
      className: "w-auto px-4",
    },
    {
      size: "lg",
      shape: "rectangle",
      className: "w-auto px-5",
    },
    {
      size: "xl",
      shape: "rectangle",
      className: "w-auto px-5",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    shape: "rectangle",
  },
})

interface ToggleButtonProps
  extends React.ComponentProps<typeof AriaToggleButton>,
    VariantProps<typeof toggleButtonVariants> {}

function ToggleButton(props: ToggleButtonProps) {
  const contextProps = useToggleGroupContext()
  const buttonProps = { ...contextProps, ...props }
  const { className, variant, size, shape, ...restProps } = buttonProps

  return (
    <AriaToggleButton
      data-slot="toggle-button"
      className={composeRenderProps(className, (className, renderProps) =>
        toggleButtonVariants({
          ...renderProps,
          variant,
          size,
          shape,
          className,
        }),
      )}
      {...restProps}
    />
  )
}

export { ToggleButton, toggleButtonVariants }
export type { ToggleButtonProps }
