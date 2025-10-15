"use client"

import { createContext, useContext, useMemo } from "react"
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
import type { ModalContentProps } from "./modal"
import { ModalContent } from "./modal"

const DialogTrigger = AriaDialogTrigger

interface DialogProps extends ModalContentProps {
  role?: "dialog" | "alertdialog"
  showCloseButton?: boolean
}

interface DialogContextValue {
  role?: "dialog" | "alertdialog"
  isDismissable?: boolean
  showCloseButton?: boolean
  scrollBehavior?: "outside" | "inside"
}

const DEFAULT_DIALOG_CTX: DialogContextValue = {
  role: "dialog",
  isDismissable: true,
  showCloseButton: true,
  scrollBehavior: "outside",
}
const DialogContext = createContext<DialogContextValue>(DEFAULT_DIALOG_CTX)

const useDialogContext = () => {
  const context = useContext(DialogContext)
  return context
}

const Dialog = ({
  role = "dialog",
  showCloseButton = true,
  isDismissable: isDismissableProp,
  scrollBehavior,
  ...props
}: DialogProps) => {
  const isDismissable = isDismissableProp ?? role !== "alertdialog"

  const value: DialogContextValue = useMemo(
    () => ({
      role,
      showCloseButton,
      isDismissable,
      scrollBehavior,
    }),
    [role, showCloseButton, isDismissable, scrollBehavior],
  )

  return (
    <DialogContext.Provider value={value}>
      <ModalContent isDismissable={isDismissable} scrollBehavior={scrollBehavior} {...props} />
    </DialogContext.Provider>
  )
}

const DialogContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AriaDialog>) => {
  const { role, isDismissable, showCloseButton } = useDialogContext()
  const showCloseIcon = showCloseButton && isDismissable

  return (
    <AriaDialog
      role={role}
      data-slot="dialog-content"
      className={cn("relative flex h-full w-full flex-col gap-4 p-6 outline-hidden", className)}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          {showCloseIcon && <DialogCloseIcon />}
        </>
      ))}
    </AriaDialog>
  )
}

const DialogBody = ({ className, ...props }: React.ComponentProps<"div">) => {
  const { scrollBehavior } = useDialogContext()

  return (
    <div
      data-slot="dialog-body"
      className={cn("flex-1", scrollBehavior === "inside" ? "overflow-auto" : "", className)}
      {...props}
    />
  )
}

const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-left", className)}
      {...props}
    />
  )
}

const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-row flex-wrap justify-end gap-2", className)}
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
    elementType="p"
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
  DialogBody,
  DialogClose,
  DialogCloseIcon,
  DialogContent,
  DialogContext,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useDialogContext,
}

export type { DialogContextValue, DialogProps }
