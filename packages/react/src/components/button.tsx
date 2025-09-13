"use client"

import { Button as AriaButton, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { focusRing } from "../lib/classes"
import { Loader } from "./loader"

const buttonVariants = tv({
  extend: focusRing,
  base: "inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap transition-all [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs",
      destructive:
        "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs",
      outline:
        "bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
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
    variant: "primary",
    size: "md",
    shape: "rectangle",
  },
})

interface ButtonProps
  extends React.ComponentProps<typeof AriaButton>,
    VariantProps<typeof buttonVariants> {
  /**
   * Loader to display when pending.
   */
  loader?: React.ReactNode | null
}

function Button({ className, variant, size, shape, loader = <Loader />, ...props }: ButtonProps) {
  return (
    <AriaButton
      data-slot="button"
      className={composeRenderProps(className, (className, renderProps) =>
        buttonVariants({
          ...renderProps,
          variant,
          size,
          shape,
          className,
        }),
      )}
      {...props}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {props.isPending && loader}
          {children}
        </>
      ))}
    </AriaButton>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
