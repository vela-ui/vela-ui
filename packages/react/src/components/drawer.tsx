"use client"

import type { ModalOverlayProps } from "react-aria-components"
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import {
  DialogClose,
  DialogCloseIcon,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "."
import { cn } from "../lib/utils"

const drawerOverlayVariants = tv({
  base: "fixed inset-0 z-50 flex w-full items-center justify-center bg-black/50",
  variants: {
    isBlurred: {
      true: "backdrop-blur-md backdrop-saturate-150",
    },
    isEntering: {
      true: "animate-in fade-in duration-300 ease-out",
    },
    isExiting: {
      true: "animate-out fade-out duration-200 ease-in",
    },
  },
})

const drawerVariants = tv({
  base: "bg-background fixed z-50 flex h-auto flex-col shadow-lg transition",
  variants: {
    placement: {
      top: "data-[entering]:slide-in-from-top data-[exiting]:slide-out-to-top inset-x-0 top-0 border-b",
      bottom:
        "data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom inset-x-0 bottom-0 border-t",
      left: "data-[entering]:slide-in-from-left data-[exiting]:slide-out-to-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right:
        "data-[entering]:slide-in-from-right data-[exiting]:slide-out-to-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
    },
    isEntering: {
      true: "animate-in duration-300",
    },
    isExiting: {
      true: "animate-out duration-200",
    },
  },
  defaultVariants: {
    placement: "right",
    isBlurred: false,
  },
})

interface DrawerProps
  extends React.ComponentProps<typeof AriaModalOverlay>,
    VariantProps<typeof drawerVariants> {
  overlayClassName?: ModalOverlayProps["className"]
  isBlurred?: boolean
}
const Drawer = ({
  className,
  overlayClassName,
  isDismissable = true,
  placement,
  isBlurred,
  ...props
}: DrawerProps) => {
  return (
    <AriaModalOverlay
      data-slot="drawer-overlay"
      style={{
        height: "var(--visual-viewport-height)",
      }}
      isDismissable={isDismissable}
      className={composeRenderProps(overlayClassName, (className, renderProps) =>
        drawerOverlayVariants({ ...renderProps, isBlurred, className }),
      )}
      {...props}
    >
      <AriaModal
        data-slot="drawer"
        isDismissable={isDismissable}
        className={composeRenderProps(className, (className, renderProps) =>
          drawerVariants({ ...renderProps, placement, className }),
        )}
        {...props}
      />
    </AriaModalOverlay>
  )
}

const DrawerBody = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div data-slot="drawer-body" className={cn("flex-1 overflow-auto", className)} {...props} />
  )
}

const DrawerTrigger = DialogTrigger

const DrawerContent = DialogContent

const DrawerHeader = DialogHeader

const DrawerFooter = DialogFooter

const DrawerTitle = DialogTitle

const DrawerDescription = DialogDescription

const DrawerCloseIcon = DialogCloseIcon

const DrawerClose = DialogClose

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerCloseIcon,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
}
export type { DrawerProps }
