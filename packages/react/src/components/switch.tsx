"use client"

import { Switch as AriaSwitch, composeRenderProps } from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

const switchVariants = tv({
  slots: {
    root: "group relative inline-flex touch-none items-center justify-start gap-2 text-sm",
    indicator:
      "inline-flex shrink-0 cursor-pointer rounded-full shadow-xs transition-all outline-none",
    thumb:
      "bg-background pointer-events-none block scale-80 rounded-full ring-0 transition-transform",
  },
  variants: {
    size: {
      sm: {
        indicator: "h-4 w-8",
        thumb: "size-4 group-data-[selected=true]:translate-x-4",
      },
      md: {
        indicator: "h-5 w-10",
        thumb: "size-5 group-data-[selected=true]:translate-x-5",
      },
      lg: {
        indicator: "h-6 w-12",
        thumb: "size-6 group-data-[selected=true]:translate-x-6",
      },
      xl: {
        indicator: "h-7 w-14",
        thumb: "size-7 group-data-[selected=true]:translate-x-7",
      },
    },
    isFocusVisible: {
      true: {
        indicator: "ring-ring/50 ring-[3px]",
      },
    },
    isInvalid: {
      true: {
        indicator: "ring-destructive/20 dark:ring-destructive/40",
      },
    },
    isDisabled: {
      true: {
        root: "text-foreground/50 cursor-not-allowed",
        indicator: "cursor-not-allowed opacity-50",
      },
    },
    isSelected: {
      true: {
        indicator: "bg-primary text-primary-foreground",
        thumb: "dark:bg-primary-foreground translate-x-5",
      },
      false: {
        indicator: "bg-input dark:bg-input/80",
        thumb: "dark:bg-foreground",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { root, indicator, thumb } = switchVariants()

interface SwitchProps
  extends React.ComponentProps<typeof AriaSwitch>,
    VariantProps<typeof switchVariants> {
  thumbClassName?: string
  indicatorClassName?: string
}

function Switch({
  className,
  thumbClassName,
  indicatorClassName,
  size,
  children,
  ...props
}: SwitchProps) {
  return (
    <AriaSwitch
      className={composeRenderProps(className, (className, renderProps) =>
        root({ ...renderProps, className }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => {
        return (
          <>
            <div
              className={indicator({
                ...renderProps,
                size,
                className: indicatorClassName,
              })}
            >
              <div
                className={thumb({
                  ...renderProps,
                  size,
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
