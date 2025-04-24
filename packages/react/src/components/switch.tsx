import { cloneElement, ReactElement } from "react"
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { DataTheme } from "./types"

const switchVariants = tv({
  base: "switch",
  variants: {
    color: {
      neutral: "switch-neutral",
      primary: "switch-primary",
      secondary: "switch-secondary",
      accent: "switch-accent",
      info: "switch-info",
      success: "switch-success",
      warning: "switch-warning",
      error: "switch-error",
    },
    size: {
      xs: "switch-xs",
      sm: "switch-sm",
      md: "switch-md",
      lg: "switch-lg",
      xl: "switch-xl",
    },
  },
})

type SwitchThumbIconProps = {
  isSelected: boolean
  className?: string
}

interface SwitchProps extends AriaSwitchProps, VariantProps<typeof switchVariants> {
  ref?: React.Ref<HTMLLabelElement>
  dataTheme?: DataTheme
  /**
   * The icon to be displayed inside the thumb.
   */
  thumbIcon?: React.ReactNode | ((props: SwitchThumbIconProps) => React.ReactNode)
}

const Switch = ({
  ref,
  className,
  color,
  size,
  dataTheme,
  thumbIcon,
  children,
  ...props
}: SwitchProps) => (
  <AriaSwitch
    ref={ref}
    data-theme={dataTheme}
    className={composeRenderProps(className, (className) =>
      switchVariants({
        color,
        size,
        className,
      }),
    )}
    {...props}
  >
    {(renderProps) => {
      const clonedThumbIcon =
        typeof thumbIcon === "function"
          ? thumbIcon({
              isSelected: renderProps.isSelected,
            })
          : thumbIcon && cloneElement(thumbIcon as ReactElement)

      return (
        <>
          <div className="switch-track">
            <div className="switch-thumb">{thumbIcon && clonedThumbIcon}</div>
          </div>
          {children}
        </>
      )
    }}
  </AriaSwitch>
)

export { Switch }
export type { SwitchProps }
