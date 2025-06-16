"use client"

import {
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components"
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

interface LinkProps extends AriaLinkProps, VariantProps<typeof linkVariants> {
  ref?: React.Ref<HTMLAnchorElement>
}

function Link({ ref, className, variant, ...props }: LinkProps) {
  return (
    <AriaLink
      ref={ref}
      data-slot="link"
      className={composeRenderProps(className, (className, renderProps) =>
        linkVariants({ ...renderProps, variant, className }),
      )}
      {...props}
    />
  )
}

interface LinkButtonProps
  extends AriaLinkProps,
    Omit<VariantProps<typeof buttonVariants>, "isPending"> {
  ref?: React.Ref<HTMLAnchorElement>
}

function LinkButton({ ref, className, variant, size, ...props }: LinkButtonProps) {
  return (
    <AriaLink
      ref={ref}
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
