"use client"

import { TextArea as AriaTextArea, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"

const textAreaVariants = tv({
  extend: focusRing,
  base: "border-input placeholder:text-muted-foreground dark:bg-input/30 relative flex w-full min-w-0 rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      xs: "px-2 py-1.5 text-xs",
      sm: "px-2.5 py-2 text-sm",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base",
      xl: "px-[1.125rem] py-3.5 text-base",
    },
    isFocused: focusRing.variants.isFocusVisible,
  },
  defaultVariants: {
    size: "md",
  },
})

interface TextareaProps
  extends Omit<React.ComponentProps<typeof AriaTextArea>, "color">,
    VariantProps<typeof textAreaVariants> {}

function Textarea({ className, size, ...props }: TextareaProps) {
  return (
    <AriaTextArea
      data-slot="textarea"
      className={composeRenderProps(className, (className, renderProps) =>
        textAreaVariants({
          ...renderProps,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { Textarea }
export type { TextareaProps }
