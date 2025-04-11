"use client"

import { useMemo } from "react"
import type {
  DialogProps as AriaDialogProps,
  HeadingProps as AriaHeadingProps,
  ModalOverlayProps,
} from "react-aria-components"
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { CloseIcon } from "../icons"
import { cn } from "../utils/classes"
import { Button } from "./button"

const drawerVariants = tv({
  slots: {
    base: "drawer",
    overlay: "drawer-overlay",
  },
  variants: {
    placement: {
      top: {
        overlay: "drawer-top",
      },
      bottom: {
        overlay: "drawer-bottom",
      },
      start: {
        overlay: "drawer-start",
      },
      end: {
        overlay: "drawer-end",
      },
    },
  },
  defaultVariants: {
    placement: "end",
  },
})

interface DrawerProps extends ModalOverlayProps, VariantProps<typeof drawerVariants> {
  overlayClassName?: string
}
const Drawer = ({
  className,
  overlayClassName,
  isDismissable = true,
  placement,
  ...props
}: DrawerProps) => {
  const slots = useMemo(
    () =>
      drawerVariants({
        placement,
      }),
    [placement],
  )

  return (
    <AriaModalOverlay
      isDismissable={isDismissable}
      className={composeRenderProps(overlayClassName, (className) =>
        cn(slots.overlay(), className),
      )}
      {...props}
    >
      <AriaModal
        isDismissable={isDismissable}
        className={composeRenderProps(className, (className) => cn(slots.base(), className))}
        {...props}
      />
    </AriaModalOverlay>
  )
}

const Content = ({ role = "dialog", className, ...props }: AriaDialogProps) => {
  return (
    <AriaDialog
      role={role}
      className={cn("relative flex h-full w-full flex-col p-6 outline-none", className)}
      {...props}
    />
  )
}

const Trigger = AriaDialogTrigger

const Title = ({ className, ...props }: AriaHeadingProps) => (
  <AriaHeading
    slot="title"
    className={cn("text-lg leading-none font-semibold", className)}
    {...props}
  />
)

const Body = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div className={cn("flex-1 overflow-auto", className)} {...props} />
)

const Header = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("mb-4", className)} {...props} />
}

const Footer = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("mt-4 flex flex-row justify-end gap-2.5", className)} {...props} />
}

const CloseButton = ({
  className,
  size = "sm",
  shape = "circle",
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    aria-label="Close"
    slot="close"
    className={cn("absolute top-2 right-2", className)}
    shape={shape}
    variant={variant}
    size={size}
    {...props}
  >
    <CloseIcon className="size-4.5" />
    <span className="sr-only">Close</span>
  </Button>
)

Drawer.Content = Content
Drawer.Trigger = Trigger
Drawer.Header = Header
Drawer.Title = Title
Drawer.Body = Body
Drawer.Footer = Footer
Drawer.CloseButton = CloseButton

export { Drawer }
export type { DrawerProps }
