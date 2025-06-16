import { tv } from "tailwind-variants"

export const focusRing = tv({
  base: "outline-hidden",
  variants: {
    isFocusVisible: {
      true: "border-ring ring-ring/50 ring-[3px]",
    },
    isInvalid: {
      true: "ring-destructive/20 dark:ring-destructive/40 border-destructive",
    },
  },
})
