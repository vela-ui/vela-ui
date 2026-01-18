"use client"

import { Separator as AriaSeparator } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const separatorVariants = tv({
  base: "bg-border shrink-0 border-none",
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

type SeparatorProps = React.ComponentProps<typeof AriaSeparator> &
  VariantProps<typeof separatorVariants>

function Separator({ orientation, className, ...props }: SeparatorProps) {
  return (
    <AriaSeparator
      data-slot="separator"
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  )
}

export { Separator }
