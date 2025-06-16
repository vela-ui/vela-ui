"use client"

import type {
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  MenuSectionProps as AriaMenuSectionProps,
} from "react-aria-components"
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuTrigger as AriaMenuTrigger,
  Collection,
  Header,
  Keyboard,
  SubmenuTrigger,
  composeRenderProps,
} from "react-aria-components"
import { VariantProps } from "tailwind-variants"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "../icons"
import { cn } from "../lib/utils"
import {
  DropdownDescription,
  DropdownLabel,
  DropdownSeparator,
  dropdownItemVariants,
} from "./dropdown"
import { Popover, PopoverProps } from "./popover"

const MenuTrigger = AriaMenuTrigger

const MenuSeparator = DropdownSeparator

const MenuLabel = DropdownLabel

const MenuDescription = DropdownDescription

function MenuPopover({ className, ...props }: PopoverProps) {
  return (
    <Popover
      className={composeRenderProps(className, (className) => cn("w-auto", className))}
      {...props}
    />
  )
}

type MenuProps<T> = AriaMenuProps<T>
function Menu<T extends object>({ className, ...props }: MenuProps<T>) {
  return (
    <AriaMenu
      className={composeRenderProps(className, (className) =>
        cn(
          "max-h-[inherit] min-w-[8rem] overflow-auto rounded-md p-1 outline-hidden [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
          className,
        ),
      )}
      {...props}
    />
  )
}

interface MenuItemProps extends AriaMenuItemProps, VariantProps<typeof dropdownItemVariants> {}

function MenuItem({ className, children, variant, ...props }: MenuItemProps) {
  const textValue = props.textValue || (typeof children === "string" ? children : undefined)
  return (
    <AriaMenuItem
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemVariants({
          ...renderProps,
          variant,
          className: cn("data-[selection-mode]:pr-2 data-[selection-mode]:pl-8", className, {
            "data-[open=true]:bg-accent data-[open=true]:text-accent-foreground":
              renderProps.hasSubmenu,
          }),
        }),
      )}
      textValue={textValue}
      {...props}
    >
      {(values) => (
        <>
          {values.isSelected && (
            <span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
              {values.selectionMode === "single" && <CircleIcon className="size-2 fill-current" />}
              {values.selectionMode === "multiple" && <CheckIcon className="size-4" />}
            </span>
          )}

          {typeof children === "function" ? children(values) : children}

          {values.hasSubmenu && <ChevronRightIcon className="ml-auto size-4" />}
        </>
      )}
    </AriaMenuItem>
  )
}

interface MenuSectionProps<T> extends AriaMenuSectionProps<T> {
  title?: string
}

function MenuSection<T extends object>({ className, ...props }: MenuSectionProps<T>) {
  return (
    <AriaMenuSection className={className} {...props}>
      {"title" in props && (
        <Header className="px-2 py-1.5 text-sm font-medium">{props.title}</Header>
      )}
      <Collection items={props.items}>{props.children}</Collection>
    </AriaMenuSection>
  )
}

function MenuShortcut({ className, ...props }: React.ComponentProps<typeof Keyboard>) {
  return (
    <Keyboard
      className={cn("text-muted-foreground ml-auto font-sans text-xs tracking-widest", className)}
      {...props}
    />
  )
}

export {
  Menu,
  MenuDescription,
  MenuItem,
  MenuLabel,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
  SubmenuTrigger,
}
export type { MenuItemProps, MenuProps, MenuSectionProps }
