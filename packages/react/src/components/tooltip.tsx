"use client"

import type { TooltipProps as AriaTooltipProps } from "react-aria-components"
import {
  Tooltip as AriaTooltip,
  TooltipTrigger as AriaTooltipTrigger,
  composeRenderProps,
  OverlayArrow,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const tooltipVariants = tv({
  base: "popover px-3 py-1",
  variants: {
    color: {
      neutral: "popover-neutral",
      primary: "popover-primary",
      secondary: "popover-secondary",
      accent: "popover-accent",
      info: "popover-info",
      success: "popover-success",
      warning: "popover-warning",
      error: "popover-error",
    },
  },
})

interface TooltipProps
  extends Omit<AriaTooltipProps, "children">,
    VariantProps<typeof tooltipVariants> {
  /**
   * Whether the element should render an arrow.
   * @default false
   */
  showArrow?: boolean
  children: React.ReactNode
}

const Trigger = AriaTooltipTrigger

const Tooltip = ({
  className,
  showArrow,
  color,
  offset = 10,
  children,
  ...props
}: TooltipProps) => {
  return (
    <AriaTooltip
      offset={offset}
      className={composeRenderProps(className, (className, renderProps) =>
        tooltipVariants({
          ...renderProps,
          color,
          className,
        }),
      )}
      {...props}
    >
      {showArrow && (
        <OverlayArrow className="popover-arrow">
          <svg width={12} height={12} viewBox="0 0 12 12">
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </AriaTooltip>
  )
}

Tooltip.Trigger = Trigger

export { Tooltip }
export type { TooltipProps }
