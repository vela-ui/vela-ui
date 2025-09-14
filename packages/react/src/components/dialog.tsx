"use client"

import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Text as AriaText,
  composeRenderProps,
} from "react-aria-components"
import { CloseIcon } from "../icons"
import { cn, composeTailwindRenderProps } from "../lib/utils"
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
      className={cn("relative flex h-full w-full flex-col p-6 outline-hidden", className)}
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
      className={cn("mb-4 flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

const DialogFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("mt-4 flex flex-row justify-end gap-2", className)}
      {...props}
    />
  )
}

const DialogTitle = ({ className, ...props }: React.ComponentProps<typeof AriaHeading>) => (
  <AriaHeading
    slot="title"
    data-slot="dialog-title"
    className={cn("text-lg leading-none font-semibold", className)}
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

const DialogCloseIcon = ({ className, ...props }: React.ComponentProps<typeof AriaButton>) => (
  <AriaButton
    aria-label="Close"
    slot="close"
    data-slot="dialog-close"
    className={composeTailwindRenderProps(
      className,
      "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    )}
    {...props}
  >
    <CloseIcon />
    <span className="sr-only">Close</span>
  </AriaButton>
)

export {
  Dialog,
  DialogCloseIcon,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
