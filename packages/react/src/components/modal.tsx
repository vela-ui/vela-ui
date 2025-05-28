"use client"

import { useMemo } from "react"
import type { ModalOverlayProps } from "react-aria-components"
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps,
} from "react-aria-components"
import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { cn } from "../lib/utils"

const modalVariants = tv({
  slots: {
    base: "modal",
    overlay: "modal-overlay",
  },
  variants: {
    scrollBehavior: {
      inside: {
        base: "max-h-[calc(100%-7.5rem)]",
        overlay: "overflow-hidden",
      },
      outside: {
        overlay: "overflow-auto",
      },
    },
    size: {
      xs: {
        base: "max-w-xs",
      },
      sm: {
        base: "max-w-sm",
      },
      md: {
        base: "max-w-md",
      },
      lg: {
        base: "max-w-lg",
      },
      xl: {
        base: "max-w-xl",
      },
      "2xl": {
        base: "max-w-2xl",
      },
      "3xl": {
        base: "max-w-3xl",
      },
      "4xl": {
        base: "max-w-4xl",
      },
      "5xl": {
        base: "max-w-5xl",
      },
      full: {
        base: "my-0 h-dvh max-w-full rounded-none",
      },
    },
    placement: {
      top: {
        overlay: "items-start",
      },
      center: {
        overlay: "items-center",
      },
      bottom: {
        overlay: "items-end",
      },
    },
  },
  defaultVariants: {
    scrollBehavior: "outside",
    size: "md",
    placement: "center",
  },
})

interface ModalProps extends ModalOverlayProps, VariantProps<typeof modalVariants> {
  overlayClassName?: string
}
const Modal = ({
  className,
  overlayClassName,
  isDismissable = true,
  size,
  placement,
  scrollBehavior,
  ...props
}: ModalProps) => {
  const slots = useMemo(
    () =>
      modalVariants({
        size,
        scrollBehavior,
        placement,
      }),
    [placement, scrollBehavior, size],
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

export { Modal }
export type { ModalProps }
