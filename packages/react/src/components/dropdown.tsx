"use client"

import type {
  ListBoxItemProps,
  SectionProps,
  SeparatorProps,
  TextProps,
} from "react-aria-components"
import {
  ListBoxItem as AriaListBoxItem,
  Collection,
  composeRenderProps,
  Header,
  ListBoxSection,
  Separator,
  Text,
} from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"
import { CheckIcon } from "../icons"

const dropdownItemVariants = tv({
  base: "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[selection-mode]:pr-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      default: "",
      destructive: "text-destructive *:[svg]:!text-destructive",
    },
    isFocused: {
      true: "bg-accent text-accent-foreground",
    },
    isHovered: {
      true: "bg-accent text-accent-foreground",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
  },
  compoundVariants: [
    {
      variant: "destructive",
      isFocused: true,
      className: "bg-destructive/10 dark:bg-destructive/20 text-destructive",
    },
  ],
})

interface DropdownSectionProps<T> extends SectionProps<T> {
  title?: string
}

function DropdownSection<T extends object>({ className, ...props }: DropdownSectionProps<T>) {
  return (
    <ListBoxSection className={className}>
      {"title" in props && (
        <Header className="text-muted-foreground px-2 py-1.5 text-xs">{props.title}</Header>
      )}
      <Collection items={props.items}>{props.children}</Collection>
    </ListBoxSection>
  )
}

type DropdownItemProps<T> = ListBoxItemProps<T> & VariantProps<typeof dropdownItemVariants>

function DropdownItem<T extends object>({ className, variant, ...props }: DropdownItemProps<T>) {
  const textValue =
    props.textValue || (typeof props.children === "string" ? props.children : undefined)
  return (
    <AriaListBoxItem
      textValue={textValue}
      className={composeRenderProps(className, (className, renderProps) =>
        dropdownItemVariants({ ...renderProps, variant, className }),
      )}
      {...props}
    >
      {composeRenderProps(props.children, (children, { isSelected }) => (
        <>
          {isSelected && (
            <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
              <CheckIcon />
            </span>
          )}
          {children}
        </>
      ))}
    </AriaListBoxItem>
  )
}

interface DropdownLabelProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}

function DropdownLabel({ className, ref, ...props }: DropdownLabelProps) {
  return <Text slot="label" ref={ref} className={className} {...props} />
}

interface DropdownDescriptionProps extends TextProps {
  ref?: React.Ref<HTMLDivElement>
}

const DropdownDescription = ({ className, ref, ...props }: DropdownDescriptionProps) => (
  <Text
    slot="description"
    ref={ref}
    className={twMerge("text-muted-foreground text-sm", className)}
    {...props}
  />
)

function DropdownSeparator({ className, ...props }: SeparatorProps) {
  return (
    <Separator
      orientation="horizontal"
      className={twMerge("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

/**
 * Note: This is not exposed component, but it's used in other components to render dropdowns.
 * @internal
 */
export {
  DropdownDescription,
  DropdownItem,
  dropdownItemVariants,
  DropdownLabel,
  DropdownSection,
  DropdownSeparator,
}
export type { DropdownItemProps, DropdownLabelProps, DropdownSectionProps }
