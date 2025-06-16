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
  base: "bg-primary text-primary-foreground z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
  variants: {
    isEntering: {
      true: [
        "animate-in fade-in-0 zoom-in-95",
        "data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[placement=bottom]:slide-in-from-top-2",
      ],
    },
    isExiting: {
      true: "animate-out fade-out-0 zoom-out-95",
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

const TooltipTrigger = AriaTooltipTrigger

function Tooltip({ className, showArrow, offset = 10, children, ...props }: TooltipProps) {
  return (
    <AriaTooltip
      data-slot="tooltip"
      offset={offset}
      className={composeRenderProps(className, (className, renderProps) =>
        tooltipVariants({
          ...renderProps,
          className,
        }),
      )}
      {...props}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="fill-primary stroke-border block stroke-1 group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      {children}
    </AriaTooltip>
  )
}

export { Tooltip, TooltipTrigger }
export type { TooltipProps }
