import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
  composeRenderProps,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { focusRing } from "../lib/classes"

const switchVariants = tv({
  base: "group relative inline-flex items-center gap-2 text-sm",
  variants: {
    isDisabled: {
      true: "text-foreground/50 cursor-not-allowed",
    },
  },
})

const switchIndicatorVariants = tv({
  extend: focusRing,
  base: "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all",
  variants: {
    isSelected: {
      true: "bg-primary text-primary-foreground",
      false: "bg-input dark:bg-input/80",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
})

const switchThumbVariants = tv({
  base: "bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform",
  variants: {
    isSelected: {
      true: "dark:bg-primary-foreground translate-x-[calc(100%-2px)]",
      false: "dark:bg-foreground translate-x-0",
    },
  },
})

interface SwitchProps extends AriaSwitchProps {
  ref?: React.Ref<HTMLLabelElement>
  thumbClassName?: string
  indicatorClassName?: string
}

const Switch = ({
  ref,
  className,
  thumbClassName,
  indicatorClassName,
  children,
  ...props
}: SwitchProps) => {
  return (
    <AriaSwitch
      ref={ref}
      className={composeRenderProps(className, (className, renderProps) =>
        switchVariants({ ...renderProps, className }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => {
        return (
          <>
            <div
              className={switchIndicatorVariants({
                ...renderProps,
                className: indicatorClassName,
              })}
            >
              <div
                className={switchThumbVariants({
                  ...renderProps,
                  className: thumbClassName,
                })}
              />
            </div>
            {children}
          </>
        )
      })}
    </AriaSwitch>
  )
}

export { Switch }
export type { SwitchProps }
