"use client"

import type { ModalOverlayProps } from "react-aria-components"
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const modalOverlayVariants = tv({
  base: "fixed top-0 left-0 isolate z-50 flex w-full items-center justify-center bg-black/50 duration-200",
  variants: {
    placement: {
      top: "items-start",
      center: "items-center",
      bottom: "items-end",
    },
    scrollBehavior: {
      inside: "overflow-hidden",
      outside: "overflow-auto",
    },
    isEntering: {
      true: "animate-in fade-in-0",
    },
    isExiting: {
      true: "animate-out fade-out-0",
    },
  },
  defaultVariants: {
    placement: "center",
    scrollBehavior: "outside",
  },
})

const modalVariants = tv({
  base: "bg-background my-16 w-full max-w-[calc(100%-2rem)] rounded-lg border shadow-lg transition duration-200",
  variants: {
    scrollBehavior: {
      inside: "max-h-[calc(100%-7.5rem)]",
      outside: "",
    },
    isEntering: {
      true: "animate-in fade-in-0 zoom-in-95",
    },
    isExiting: {
      true: "animate-out fade-out-0 zoom-out-95",
    },
    size: {
      xs: "sm:max-w-xs",
      sm: "sm:max-w-sm",
      md: "sm:max-w-md",
      lg: "sm:max-w-lg",
      xl: "sm:max-w-xl",
      "2xl": "sm:max-w-2xl",
      "3xl": "sm:max-w-3xl",
      "4xl": "sm:max-w-4xl",
      "5xl": "sm:max-w-5xl",
      full: "my-0 h-dvh max-w-full rounded-none",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

function ModalOverlay({
  className,
  placement,
  scrollBehavior,
  ...props
}: React.ComponentProps<typeof AriaModalOverlay> & VariantProps<typeof modalOverlayVariants>) {
  return (
    <AriaModalOverlay
      data-slot="modal-overlay"
      style={{
        height: "var(--visual-viewport-height)",
      }}
      className={composeRenderProps(className, (className, renderProps) =>
        modalOverlayVariants({ ...renderProps, placement, scrollBehavior, className }),
      )}
      {...props}
    />
  )
}

function Modal({
  className,
  size,
  scrollBehavior,
  ...props
}: React.ComponentProps<typeof AriaModal> & VariantProps<typeof modalVariants>) {
  return (
    <AriaModal
      data-slot="modal"
      className={composeRenderProps(className, (className, renderProps) =>
        modalVariants({ ...renderProps, size, scrollBehavior, className }),
      )}
      {...props}
    />
  )
}

interface ModalContentProps extends ModalOverlayProps, VariantProps<typeof modalVariants> {
  isDismissable?: boolean
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full"
  placement?: "top" | "center" | "bottom"
  scrollBehavior?: "inside" | "outside"
  overlayClassName?: ModalOverlayProps["className"]
}
function ModalContent({
  className,
  overlayClassName,
  isDismissable = true,
  size,
  placement,
  scrollBehavior,
  ...props
}: ModalContentProps) {
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={overlayClassName}
      placement={placement}
      scrollBehavior={scrollBehavior}
      {...props}
    >
      <Modal
        isDismissable={isDismissable}
        className={className}
        size={size}
        scrollBehavior={scrollBehavior}
        {...props}
      />
    </ModalOverlay>
  )
}

export { Modal, ModalContent, ModalOverlay }
export type { ModalContentProps }
