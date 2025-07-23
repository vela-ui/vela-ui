"use client"

import { Children, cloneElement } from "react"
import { Group as AriaGroup, Input as AriaInput, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"
import { cn } from "../lib/utils"

const inputVariants = tv({
  extend: focusRing,
  base: "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input relative flex w-full min-w-0 rounded-md border bg-transparent py-1 shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
    VariantProps<typeof inputVariants> {}

function Input({ className, size, ...props }: InputProps) {
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

const inputGroupVariants = tv({
  slots: {
    root: [
      "relative isolate flex w-full flex-row items-center justify-start !gap-0",
      "has-[[data-slot=input-addon]]:[&_:not(:first-child)]:-ml-px",
      "has-[[data-slot=input-addon]]:[&_:not(:first-child)]:rounded-ss-none has-[[data-slot=input-addon]]:[&_:not(:first-child)]:rounded-es-none",
      "has-[[data-slot=input-addon]]:[&_:not(:last-child)]:rounded-se-none has-[[data-slot=input-addon]]:[&_:not(:last-child)]:rounded-ee-none",
    ],
    addon:
      "border-input bg-accent flex w-auto items-center self-stretch rounded-md border px-3 text-sm whitespace-nowrap",
    element: "text-muted-foreground absolute inset-y-0 z-50 flex items-center px-3",
  },
})

const { root, addon, element } = inputGroupVariants()

interface InputGroupProps extends React.ComponentProps<typeof AriaGroup> {
  /**
   * The children to render inside the group
   */
  children: React.ReactElement<InputProps>
  /**
   * The start element to render the inner left of the group
   */
  startElement?: React.ReactNode
  /**
   * The end element to render the inner right of the group
   */
  endElement?: React.ReactNode
  /**
   * The start addon to render the left of the group
   */
  startAddon?: React.ReactNode
  /**
   * The end addon to render the right of the group
   */
  endAddon?: React.ReactNode
}

const InputGroup = ({
  children,
  startElement,
  endElement,
  startAddon,
  endAddon,
  className,
  ...props
}: InputGroupProps) => {
  const child = Children.only<React.ReactElement<InputProps>>(children)

  return (
    <AriaGroup
      data-slot="input-group"
      className={composeRenderProps(className, (className) => root({ className }))}
      {...props}
    >
      {startElement && <InputElement className="left-0">{startElement}</InputElement>}
      {startAddon && <InputAddon>{startAddon}</InputAddon>}
      {cloneElement(child, {
        className: cn({
          "pl-10": startElement,
          "pr-10": endElement,
        }),
        ...child.props,
      })}
      {endElement && <InputElement className="right-0">{endElement}</InputElement>}
      {endAddon && <InputAddon>{endAddon}</InputAddon>}
    </AriaGroup>
  )
}

function InputAddon({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="input-addon" className={addon({ className })} {...props} />
}

function InputElement({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="input-element" className={element({ className })} {...props} />
}

export { Input, InputGroup }
export type { InputGroupProps, InputProps }
