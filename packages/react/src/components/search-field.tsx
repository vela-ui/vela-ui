"use client"

import { SearchField as AriaSearchField, composeRenderProps } from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { CloseIcon, SearchIcon } from "../icons"
import { Button } from "./button"
import { Description, FieldError, FieldProps, Label } from "./field"
import { Input, InputGroup, type InputGroupProps } from "./input"

const searchFieldVariants = tv({
  base: "group flex flex-col gap-2 data-[empty=true]:[&_button]:hidden [&_input]:[&::-webkit-search-cancel-button]:appearance-none [&_input]:[&::-webkit-search-decoration]:appearance-none",
})

interface SearchFieldProps
  extends FieldProps,
    React.ComponentProps<typeof AriaSearchField>,
    VariantProps<typeof searchFieldVariants> {
  size?: InputGroupProps["size"]
  startElement?: React.ReactNode
  endElement?: React.ReactNode
}

function SearchField({
  placeholder,
  label,
  description,
  errorMessage,
  size,
  className,
  startElement = <SearchIcon />,
  endElement = (
    <Button variant="ghost" shape="circle" size="xs">
      <CloseIcon />
    </Button>
  ),
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField
      aria-label={placeholder ?? props["aria-label"] ?? "Search"}
      className={composeRenderProps(className, (className) => searchFieldVariants({ className }))}
      {...props}
    >
      {label && <Label>{label}</Label>}
      <InputGroup size={size} startElement={startElement} endElement={endElement}>
        <Input placeholder={placeholder} />
      </InputGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  )
}

export { SearchField }
export type { SearchFieldProps }
