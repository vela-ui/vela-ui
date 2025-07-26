"use client"

import { Children, cloneElement } from "react"
import { Group as AriaGroup, Input as AriaInput, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { focusRing } from "../lib/classes"

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
    isFocused: focusRing.variants.isFocusVisible,
    hasStartElement: {
      true: "",
    },
    hasEndElement: {
      true: "",
    },
  },
  compoundVariants: [
    {
      hasStartElement: true,
      size: "xs",
      className: "pl-8",
    },
    {
      hasStartElement: true,
      size: "sm",
      className: "pl-9",
    },
    {
      hasStartElement: true,
      size: "md",
      className: "pl-10",
    },
    {
      hasStartElement: true,
      size: "lg",
      className: "pl-11",
    },
    {
      hasStartElement: true,
      size: "xl",
      className: "pl-12",
    },
    {
      hasEndElement: true,
      size: "xs",
      className: "pr-8",
    },
    {
      hasEndElement: true,
      size: "sm",
      className: "pr-9",
    },
    {
      hasEndElement: true,
      size: "md",
      className: "pr-10",
    },
    {
      hasEndElement: true,
      size: "lg",
      className: "pr-11",
    },
    {
      hasEndElement: true,
      size: "xl",
      className: "pr-12",
    },
  ],
  defaultVariants: {
    size: "md",
  },
})

interface InputProps
  extends Omit<React.ComponentProps<typeof AriaInput>, "color" | "size">,
    VariantProps<typeof inputVariants> {}

function Input({ className, size, hasStartElement, hasEndElement, ...props }: InputProps) {
  return (
    <AriaInput
      data-slot="input"
      className={composeRenderProps(className, (className, renderProps) =>
        inputVariants({
          ...renderProps,
          size,
          hasStartElement,
          hasEndElement,
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
      "border-input bg-accent flex w-auto items-center self-stretch rounded-md border whitespace-nowrap",
    element:
      "text-muted-foreground absolute inset-y-0 z-50 flex items-center has-[button]:px-0 [&_button]:scale-75",
  },
  variants: {
    size: {
      xs: {
        root: "text-xs",
        addon: "px-2.5",
        element: "px-2.5",
      },
      sm: {
        root: "text-sm",
        addon: "px-3",
        element: "px-3",
      },
      md: {
        root: "text-sm",
        addon: "px-3",
        element: "px-3",
      },
      lg: {
        root: "text-base",
        addon: "px-3.5",
        element: "px-3.5",
      },
      xl: {
        root: "text-base",
        addon: "px-4",
        element: "px-4",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { root, addon, element } = inputGroupVariants()

interface InputGroupProps
  extends React.ComponentProps<typeof AriaGroup>,
    VariantProps<typeof inputGroupVariants> {
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
  size,
  className,
  ...props
}: InputGroupProps) => {
  const child = Children.only<React.ReactElement<InputProps>>(children)

  return (
    <AriaGroup
      data-slot="input-group"
      className={composeRenderProps(className, (className) => root({ size, className }))}
      {...props}
    >
      {startElement && !startAddon && (
        <InputElement size={size} className="left-0">
          {startElement}
        </InputElement>
      )}
      {startAddon && <InputAddon size={size}>{startAddon}</InputAddon>}
      {cloneElement(child, {
        hasStartElement: !!startElement,
        hasEndElement: !!endElement,
        size,
        ...child.props,
      })}
      {endElement && !endAddon && (
        <InputElement size={size} className="right-0">
          {endElement}
        </InputElement>
      )}
      {endAddon && <InputAddon size={size}>{endAddon}</InputAddon>}
    </AriaGroup>
  )
}

function InputAddon({
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & { size: InputGroupProps["size"] }) {
  return <div data-slot="input-addon" className={addon({ size, className })} {...props} />
}

function InputElement({
  className,
  size,
  ...props
}: React.ComponentProps<"div"> & { size: InputGroupProps["size"] }) {
  return <div data-slot="input-element" className={element({ size, className })} {...props} />
}

export { Input, InputGroup }
export type { InputGroupProps, InputProps }
