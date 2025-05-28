"use client"

import type { PopoverProps as AriaPopoverProps } from "react-aria-components"
import {
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  composeRenderProps,
  OverlayArrow,
  PopoverContext,
  useSlottedContext,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { cn } from "../lib/utils"

const popoverVariants = tv({
  base: "popover",
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

interface PopoverProps
  extends Omit<AriaPopoverProps, "children">,
    VariantProps<typeof popoverVariants> {
  /**
   * Whether the element should render an arrow.
   * @default false
   */
  showArrow?: boolean
  children: React.ReactNode
}

const Trigger = AriaDialogTrigger

const Popover = ({ className, showArrow, color, children, ...props }: PopoverProps) => {
  const popoverContext = useSlottedContext(PopoverContext)!
  const isSubmenu = popoverContext?.trigger === "SubmenuTrigger"
  let offset = showArrow ? 12 : 8
  offset = isSubmenu ? offset - 6 : offset

  return (
    <AriaPopover
      offset={offset}
      className={composeRenderProps(className, (className, renderProps) =>
        popoverVariants({
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
    </AriaPopover>
  )
}

function Content({ className, ...props }: AriaDialogProps) {
  return <AriaDialog className={cn("p-4 outline-none", className)} {...props} />
}

Popover.Trigger = Trigger
Popover.Content = Content

export { Popover }
export type { PopoverProps }
