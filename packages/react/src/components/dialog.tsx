"use client"

import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Text as AriaText,
  composeRenderProps,
} from "react-aria-components"
import { CloseIcon } from "../icons"
import { cn } from "../lib/utils"
import { Button, ButtonProps } from "./button"
import type { ModalContentProps as DialogProps } from "./modal"
import { ModalContent } from "./modal"

const DialogTrigger = AriaDialogTrigger

const Dialog = (props: DialogProps) => <ModalContent {...props} />

const DialogContent = ({
  role = "dialog",
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof AriaDialog> & {
  showCloseButton?: boolean
}) => {
  return (
    <AriaDialog
      role={role}
      data-slot="dialog-content"
      className={cn(
        "relative flex h-full max-h-dvh w-full flex-col gap-4 p-6 outline-hidden",
        className,
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          {showCloseButton && <DialogCloseIcon />}
        </>
      ))}
    </AriaDialog>
  )
}

const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  )
}

const DialogTitle = ({ className, ...props }: React.ComponentProps<typeof AriaHeading>) => (
  <AriaHeading
    slot="title"
    data-slot="dialog-title"
    className={cn("text-lg leading-6 font-semibold", className)}
    {...props}
  />
)

const DialogDescription = ({ className, ...props }: React.ComponentProps<typeof AriaText>) => (
  <AriaText
    slot="description"
    data-slot="dialog-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
)

const DialogCloseIcon = ({
  className,
  shape = "circle",
  variant = "ghost",
  size = "xs",
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    aria-label="Close"
    slot="close"
    data-slot="dialog-close"
    className={cn("absolute top-2 right-2", className)}
    shape={shape}
    variant={variant}
    size={size}
    {...props}
  >
    <CloseIcon />
    <span className="sr-only">Close</span>
  </Button>
)

const DialogClose = ({ className, variant = "outline", ...props }: ButtonProps) => {
  return <Button slot="close" className={className} variant={variant} {...props} />
}

export {
  Dialog,
  DialogClose,
  DialogCloseIcon,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}

export type { DialogProps }
