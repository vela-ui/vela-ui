"use client"

import { ListBox as AriaListBox, ListBoxProps as AriaListBoxProps } from "react-aria-components"
import { composeTailwindRenderProps } from "../lib/utils"
import { DropdownDescription, DropdownItem, DropdownLabel, DropdownSection } from "./dropdown"

type ListBoxProps<T> = Omit<AriaListBoxProps<T>, "layout" | "orientation">

function ListBox<T extends object>({ className, ...props }: ListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeTailwindRenderProps(
        className,
        "group bg-popover text-popover-foreground min-w-[8rem] overflow-auto rounded-md border p-1 shadow-md outline-hidden data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm",
      )}
      {...props}
    />
  )
}

const ListBoxItem = DropdownItem

const ListBoxSection = DropdownSection

const ListBoxLabel = DropdownLabel

const ListBoxDescription = DropdownDescription

export { ListBox, ListBoxDescription, ListBoxItem, ListBoxLabel, ListBoxSection }
export type { ListBoxProps }
