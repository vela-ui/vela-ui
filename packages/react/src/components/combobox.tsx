"use client"

import type {
  ComboBoxProps as AriaComboBoxProps,
  ListBoxProps as AriaListBoxProps,
} from "react-aria-components"
import {
  ComboBox as AriaComboBox,
  ListBox as AriaListBox,
  composeRenderProps,
} from "react-aria-components"
import { ChevronsUpDownIcon } from "../icons"
import { composeTailwindRenderProps } from "../lib/utils"
import { Button } from "./button"
import { DropdownDescription, DropdownItem, DropdownLabel, DropdownSection } from "./dropdown"
import { Description, FieldError, FieldProps, Label } from "./field"
import { Input, InputGroup } from "./input"
import { Popover, PopoverProps } from "./popover"

interface ComboboxProps<T extends object> extends AriaComboBoxProps<T>, FieldProps {}

function Combobox<T extends object>({
  label,
  description,
  errorMessage,
  children,
  className,
  ...props
}: ComboboxProps<T>) {
  return (
    <AriaComboBox
      data-slot="combobox"
      {...props}
      className={composeTailwindRenderProps(className, "group flex w-full flex-col gap-2")}
    >
      {composeRenderProps(children, (children) => (
        <>
          {label && <Label>{label}</Label>}
          {children}
          {description && <Description>{description}</Description>}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </AriaComboBox>
  )
}

function ComboboxPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      showArrow={false}
      className={className}
      style={{ minWidth: "var(--trigger-width)" }}
      {...props}
    />
  )
}

function ComboboxList<T extends object>({ className, ...props }: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeTailwindRenderProps(
        className,
        "max-h-[inherit] min-w-[inherit] overflow-auto p-1 outline-hidden",
      )}
      {...props}
    />
  )
}

interface ComboboxInputProps extends React.ComponentProps<typeof Input> {
  endElement?: React.ReactNode
  endElementProps?: React.ComponentProps<typeof Button>
}

function ComboboxInput({
  size,
  endElementProps,
  endElement = (
    <Button variant="ghost" shape="square" size={size} {...endElementProps}>
      <ChevronsUpDownIcon />
    </Button>
  ),
  ...props
}: ComboboxInputProps) {
  return (
    <InputGroup size={size} endElement={endElement}>
      <Input {...props} />
    </InputGroup>
  )
}

const ComboboxSection = DropdownSection
const ComboboxItem = DropdownItem
const ComboboxLabel = DropdownLabel
const ComboboxDescription = DropdownDescription

export {
  Combobox,
  ComboboxDescription,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxPopover,
  ComboboxSection,
}
export type { ComboboxProps }
