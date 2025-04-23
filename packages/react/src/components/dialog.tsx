"use client"

import type {
  DialogProps as AriaDialogProps,
  HeadingProps as AriaHeadingProps,
  TextProps as AriaTextProps,
} from "react-aria-components"
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Text as AriaText,
} from "react-aria-components"
import { CloseIcon } from "../icons"
import { cn } from "../utils/classes"
import { Button } from "./button"
import type { ModalProps as DialogProps } from "./modal"
import { Modal } from "./modal"

const Dialog = (props: DialogProps) => <Modal {...props} />

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

const Description = ({ className, ...props }: AriaTextProps) => (
  <AriaText slot="description" className={className} {...props} />
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

Dialog.Content = Content
Dialog.Trigger = Trigger
Dialog.Header = Header
Dialog.Title = Title
Dialog.Description = Description
Dialog.Footer = Footer
Dialog.CloseButton = CloseButton

export { Dialog }
export type { DialogProps }
