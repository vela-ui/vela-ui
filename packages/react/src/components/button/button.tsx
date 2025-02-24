"use client"

import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components"
import type { ButtonVariantProps } from "./styles"
import "./styles.css"

export interface ButtonProps extends AriaButtonProps, ButtonVariantProps {
  ref?: React.Ref<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  const { className, color, rounded, variant, size, isIconOnly, ref, ...otherProps } = props

  return (
    <AriaButton
      ref={ref}
      {...otherProps}
      className="red"
      // className={composeRenderProps(className, (className, renderProps) =>
      //   buttonStyles({
      //     ...renderProps,
      //     color,
      //     variant,
      //     rounded,
      //     size,
      //     isIconOnly,
      //     className,
      //   }),
      // )}
    >
      {(values) => (
        <>{typeof props.children === "function" ? props.children(values) : props.children}</>
      )}
    </AriaButton>
  )
}

export const IconButton = (props: ButtonProps) => {
  return <Button isIconOnly {...props} />
}
