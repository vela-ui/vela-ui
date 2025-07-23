import {
  Button as AriaButton,
  Group as AriaGroup,
  NumberField as AriaNumberField,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { ChevronDownIcon, ChevronUpIcon } from "../icons"
import { Description, FieldError, FieldProps, Label } from "./field"
import { Input } from "./input"

const buttonVariants = tv({
  base: "text-muted-foreground hover:bg-accent flex flex-1 cursor-pointer items-center justify-center leading-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
})

const numberFieldVariants = tv({
  slots: {
    root: "flex flex-col gap-2",
    group: "relative isolate z-0",
    control: "absolute end-0 top-0 z-10 m-px flex h-[calc(100%-2px)] flex-col border-s-1",
  },
  variants: {
    size: {
      xs: { control: "w-4 text-xs" },
      sm: { control: "w-5 text-xs" },
      md: { control: "w-6 text-sm" },
      lg: { control: "w-7 text-base" },
      xl: { control: "w-8 text-base" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { root, group, control } = numberFieldVariants()

type NumberFieldProps = FieldProps &
  React.ComponentProps<typeof AriaNumberField> &
  VariantProps<typeof numberFieldVariants> & {
    placeholder?: string
  }

function NumberField({
  label,
  description,
  errorMessage,
  size,
  className,
  ...props
}: NumberFieldProps) {
  return (
    <AriaNumberField
      {...props}
      className={composeRenderProps(className, (className) => root({ className }))}
    >
      {label && <Label>{label}</Label>}
      <AriaGroup className={group()}>
        <Input size={size} />
        <div className={control({ size })}>
          <AriaButton className={buttonVariants({ className: "rounded-se-md" })} slot="increment">
            <ChevronUpIcon />
          </AriaButton>
          <AriaButton
            className={buttonVariants({ className: "rounded-ee-md border-t-1" })}
            slot="decrement"
          >
            <ChevronDownIcon />
          </AriaButton>
        </div>
      </AriaGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  )
}

export { NumberField }
export type { NumberFieldProps }
