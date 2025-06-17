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
  DialogCloseIcon,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "."

const drawerOverlayVariants = tv({
  base: "fixed top-0 left-0 isolate z-50 flex w-full items-center justify-center bg-black/50",
  variants: {
    isEntering: {
      true: "animate-in fade-in-0 duration-300",
    },
    isExiting: {
      true: "animate-out fade-out-0 duration-200",
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
  },
})

interface DrawerProps
  extends React.ComponentProps<typeof AriaModalOverlay>,
    VariantProps<typeof drawerVariants> {
  overlayClassName?: ModalOverlayProps["className"]
}
const Drawer = ({
  className,
  overlayClassName,
  isDismissable = true,
  placement,
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
        drawerOverlayVariants({ ...renderProps, className }),
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

const DrawerTrigger = DialogTrigger

const DrawerContent = DialogContent

const DrawerHeader = DialogHeader

const DrawerFooter = DialogFooter

const DrawerTitle = DialogTitle

const DrawerDescription = DialogDescription

const DrawerCloseIcon = DialogCloseIcon

export {
  Drawer,
  DrawerCloseIcon,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
}
export type { DrawerProps }
