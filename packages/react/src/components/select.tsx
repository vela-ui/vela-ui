"use client"

import type {
  ButtonProps as AriaButtonProps,
  ListBoxProps as AriaListBoxProps,
  SelectProps as AriaSelectProps,
  SelectValueProps as AriaSelectValueProps,
  ValidationResult,
} from "react-aria-components"
import {
  Button as AriaButton,
  ListBox as AriaListBox,
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { ChevronDownIcon } from "../icons"
import { focusRing } from "../lib/classes"
import { cn, composeTailwindRenderProps } from "../lib/utils"
import {
  DropdownDescription,
  DropdownItem,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
} from "./dropdown"
import { Description, FieldError, Label } from "./field"
import { Popover, PopoverProps } from "./popover"

const selectTriggerVariants = tv({
  extend: focusRing,
  base: "border-input [&_svg:not([class*='text-'])]:text-muted-foreground dark:bg-input/30 dark:hover:bg-input/50 group-data-[invalid]:ring-destructive/20 group-data-[invalid]:dark:ring-destructive/40 group-data-[invalid]:border-destructive flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    size: {
      xs: "h-8 [&_svg:not([class*='size-'])]:size-3.5",
      sm: "h-9 [&_svg:not([class*='size-'])]:size-4",
      md: "h-10 [&_svg:not([class*='size-'])]:size-4",
      lg: "h-11 [&_svg:not([class*='size-'])]:size-5",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const SelectSection = DropdownSection
const SelectSeparator = DropdownSeparator
const SelectLabel = DropdownLabel
const SelectDescription = DropdownDescription
const SelectItem = DropdownItem

interface SelectProps<T extends object> extends AriaSelectProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  className?: string
}

function Select<T extends object>({
  label,
  description,
  errorMessage,
  className,
  ...props
}: SelectProps<T>) {
  return (
    <AriaSelect
      {...props}
      className={composeTailwindRenderProps(className, "group flex w-full flex-col gap-2")}
    >
      {(values) => (
        <>
          {label && <Label>{label}</Label>}
          {typeof props.children === "function" ? props.children(values) : props.children}
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      )}
    </AriaSelect>
  )
}

type SelectTriggerProps = AriaButtonProps & VariantProps<typeof selectTriggerVariants>
function SelectTrigger({ className, size, children, ...props }: SelectTriggerProps) {
  return (
    <AriaButton
      data-slot="select-trigger"
      className={composeRenderProps(className, (className, renderProps) =>
        selectTriggerVariants({
          ...renderProps,
          size,
          className,
        }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronDownIcon aria-hidden="true" className="opacity-50" />
        </>
      ))}
    </AriaButton>
  )
}

function SelectValue<T extends object>({ className, ...props }: AriaSelectValueProps<T>) {
  return (
    <AriaSelectValue
      data-slot="select-value"
      className={composeRenderProps(className, (className) =>
        cn(
          "data-[placeholder]:text-muted-foreground line-clamp-1 flex items-center gap-2",
          /* Description */
          "[&>[slot=description]]:hidden",
          className,
        ),
      )}
      {...props}
    />
  )
}

function SelectPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      showArrow={false}
      className={className}
      style={{ minWidth: "var(--trigger-width)" }}
      {...props}
    />
  )
}

function SelectList<T extends object>({ className, ...props }: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn("max-h-[inherit] min-w-[inherit] overflow-auto p-1 outline-hidden", className),
      )}
      {...props}
    />
  )
}

export {
  Select,
  SelectDescription,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectPopover,
  SelectSection,
  SelectSeparator,
  SelectTrigger,
  SelectValue
}
export type { SelectProps }

