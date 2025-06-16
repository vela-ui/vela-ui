import type { TextAreaProps as AriaTextAreaProps } from "react-aria-components"
import { TextArea as AriaTextArea, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"

const textAreaVariants = tv({
  extend: focusRing,
  base: "border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  variants: {
    isFocused: focusRing.variants.isFocusVisible,
  },
})

interface TextareaProps
  extends Omit<AriaTextAreaProps, "color">,
    VariantProps<typeof textAreaVariants> {
  ref?: React.Ref<HTMLTextAreaElement>
}

function Textarea({ ref, className, ...props }: TextareaProps) {
  return (
    <AriaTextArea
      ref={ref}
      data-slot="textarea"
      className={composeRenderProps(className, (className, renderProps) =>
        textAreaVariants({
          ...renderProps,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { Textarea }
export type { TextareaProps }
