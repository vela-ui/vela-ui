"use client"

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
  base: "bg-popover text-popover-foreground z-50 rounded-md border shadow-md outline-hidden duration-200",
  variants: {
    isEntering: {
      true: [
        "animate-in fade-in-0 zoom-in-95",
        "data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[placement=bottom]:slide-in-from-top-2",
      ],
    },
    isExiting: {
      true: [
        "animate-out fade-out-0 zoom-out-95",
        "data-[placement=left]:slide-out-to-right-2 data-[placement=right]:slide-out-to-left-2 data-[placement=top]:slide-out-to-bottom-2 data-[placement=bottom]:slide-out-to-top-2",
      ],
    },
  },
})

interface PopoverProps
  extends React.ComponentProps<typeof AriaPopover>,
    VariantProps<typeof popoverVariants> {
  /**
   * Whether the element should render an arrow.
   * @default false
   */
  showArrow?: boolean
}

const PopoverTrigger = AriaDialogTrigger

const Popover = ({ className, showArrow, ...props }: PopoverProps) => {
  const popoverContext = useSlottedContext(PopoverContext)!
  const isSubmenu = popoverContext?.trigger === "SubmenuTrigger"
  let offset = showArrow ? 12 : 8
  offset = isSubmenu ? offset - 6 : offset

  return (
    <AriaPopover
      data-slot="popover"
      offset={offset}
      className={composeRenderProps(className, (className, renderProps) =>
        popoverVariants({
          ...renderProps,
          className,
        }),
      )}
      {...props}
    >
      {composeRenderProps(props.children, (children) => (
        <>
          {showArrow && (
            <OverlayArrow className="group">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                className="fill-popover stroke-border block stroke-1 group-data-[placement=bottom]:rotate-180 group-data-[placement=left]:-rotate-90 group-data-[placement=right]:rotate-90"
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrow>
          )}
          {children}
        </>
      ))}
    </AriaPopover>
  )
}

function PopoverContent({ className, ...props }: AriaDialogProps) {
  return (
    <AriaDialog
      data-slot="popover-content"
      className={cn("p-4 outline-hidden", className)}
      {...props}
    />
  )
}

export { Popover, PopoverContent, PopoverTrigger }
export type { PopoverProps }
