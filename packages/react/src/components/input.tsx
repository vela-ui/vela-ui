"use client"

import { Input as AriaInput, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"

const inputVariants = tv({
  extend: focusRing,
  base: "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent py-1 shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      xs: "h-8 px-2 text-xs",
      sm: "h-9 px-2.5 text-sm",
      md: "h-10 px-3 text-sm",
      lg: "h-11 px-4 text-base",
      xl: "h-12 px-4.5 text-base",
    },
    hasStartContent: {
      true: "pl-10",
    },
    hasEndContent: {
      true: "pr-10",
    },
    isFocused: focusRing.variants.isFocusVisible,
  },
  defaultVariants: {
    size: "md",
  },
})

interface InputProps
  extends Omit<React.ComponentProps<typeof AriaInput>, "color" | "size">,
    VariantProps<typeof inputVariants> {
  /**
   * Element to be rendered in the left side of the input.
   */
  startContent?: React.ReactNode
  /**
   * Element to be rendered in the right side of the input.
   */
  endContent?: React.ReactNode
}

function Input({ className, size, startContent, endContent, ...props }: InputProps) {
  if (startContent || endContent) {
    return (
      <div className="relative">
        {startContent && (
          <div className="text-muted-foreground pointer-events-none absolute top-0 bottom-0 left-0 flex items-center px-3">
            {startContent}
          </div>
        )}
        <AriaInput
          data-slot="input"
          className={composeRenderProps(className, (className, renderProps) =>
            inputVariants({
              ...renderProps,
              size,
              hasStartContent: !!startContent,
              hasEndContent: !!endContent,
              className,
            }),
          )}
          {...props}
        />
        {endContent && (
          <div className="text-muted-foreground pointer-events-none absolute top-0 right-0 bottom-0 flex items-center px-3">
            {endContent}
          </div>
        )}
      </div>
    )
  }
  return (
    <AriaInput
      data-slot="input"
      className={composeRenderProps(className, (className, renderProps) =>
        inputVariants({
          ...renderProps,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

// interface InputGroupProps extends React.ComponentProps<"div"> {
//   children: React.ReactNode
//   startContent?: React.ReactNode
//   endContent?: React.ReactNode
// }

// const InputGroup = ({
//   children,
//   startContent,
//   endContent,
//   className,
//   ...props
// }: InputGroupProps) => {
//   return (
//     <div data-slot="input-group" className={cn("relative", className)} {...props}>
//       {startContent && (
//         <div
//           data-slot="input-group-start"
//           className="absolute top-0 bottom-0 left-0 flex items-center"
//         >
//           {startContent}
//         </div>
//       )}
//       {children}
//       {endContent && (
//         <div className="absolute top-0 right-0 bottom-0 flex items-center">{endContent}</div>
//       )}
//     </div>
//   )
// }

export { Input }
export type { InputProps }
