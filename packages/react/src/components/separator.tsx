"use client"

import { Separator as AriaSeparator } from "react-aria-components"
import { tv } from "tailwind-variants"

const separatorVariants = tv({
  base: "bg-border shrink-0",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

function Separator({
  orientation,
  className,
  ...props
}: React.ComponentProps<typeof AriaSeparator>) {
  return (
    <AriaSeparator
      data-slot="separator"
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  )
}

export { Separator }
