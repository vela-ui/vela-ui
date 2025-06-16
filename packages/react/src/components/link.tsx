"use client"

import { Link as AriaLink, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { buttonVariants } from "./button"

const linkVariants = tv({
  base: "underline-offset-4 outline-0 outline-offset-2 outline-current focus-visible:outline-2",
  variants: {
    variant: {
      hover: "hover:underline",
      underline: "underline",
      none: "no-underline",
    },
    isDisabled: {
      true: "pointer-events-none cursor-default opacity-50",
    },
  },
  defaultVariants: {
    variant: "hover",
  },
})

type LinkProps = React.ComponentProps<typeof AriaLink> & VariantProps<typeof linkVariants>
function Link({ className, variant, ...props }: LinkProps) {
  return (
    <AriaLink
      data-slot="link"
      className={composeRenderProps(className, (className, renderProps) =>
        linkVariants({ ...renderProps, variant, className }),
      )}
      {...props}
    />
  )
}

type LinkButtonProps = React.ComponentProps<typeof AriaLink> &
  Omit<VariantProps<typeof buttonVariants>, "isPending">
function LinkButton({ className, variant, size, ...props }: LinkButtonProps) {
  return (
    <AriaLink
      data-slot="link"
      className={composeRenderProps(className, (className, renderProps) =>
        buttonVariants({
          ...renderProps,
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { Link, LinkButton }
export type { LinkButtonProps, LinkProps }
