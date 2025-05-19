"use client"

import type {
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
} from "react-aria-components"
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "../utils/classes"
import { DataTheme } from "./types"

interface RadioGroupProps extends AriaRadioGroupProps {
  ref?: React.Ref<HTMLDivElement>
}

const RadioGroup = ({ ref, className, ...props }: RadioGroupProps) => {
  return (
    <AriaRadioGroup
      ref={ref}
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          "group flex flex-col flex-wrap gap-2",
          renderProps.orientation === "horizontal" && "flex-row items-center",
          className,
        ),
      )}
      {...props}
    />
  )
}

const radioVariants = tv({
  base: "radio",
  variants: {
    color: {
      neutral: "radio-neutral",
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      info: "radio-info",
      success: "radio-success",
      warning: "radio-warning",
      error: "radio-error",
    },
    size: {
      xs: "radio-xs",
      sm: "radio-sm",
      md: "radio-md",
      lg: "radio-lg",
      xl: "radio-xl",
    },
  },
})

interface RadioProps extends AriaRadioProps, VariantProps<typeof radioVariants> {
  ref?: React.Ref<HTMLLabelElement>
  wrapperClassName?: string
  dataTheme?: DataTheme
}

const Radio = ({
  ref,
  wrapperClassName,
  className,
  color,
  size,
  children,
  dataTheme,
  ...props
}: RadioProps) => (
  <AriaRadio
    ref={ref}
    data-theme={dataTheme}
    className={composeRenderProps(wrapperClassName, (className) => cn("radio-wrapper", className))}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        <div
          className={cn(
            radioVariants({
              color,
              size,
            }),
            className,
          )}
        />
        {children}
      </>
    ))}
  </AriaRadio>
)

export { Radio, RadioGroup }
export type { RadioGroupProps, RadioProps }
