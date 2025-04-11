"use client"

import { useCallback, useState } from "react"
import { useCallbackRef } from "./use-callback-ref"

export interface UseDisclosureProps {
  isOpen?: boolean
  defaultOpen?: boolean
  onClose?(): void
  onOpen?(): void
}

/**
 * `useDisclosure` is a custom hook used to help handle common open, close, or toggle scenarios.
 * It can be used to control feedback component such as `Modal`, `AlertDialog`, `Drawer`, etc.
 *
 * @see Docs https://chakra-ui.com/docs/hooks/use-disclosure
 * @see Source https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/hooks/use-disclosure.ts
 */
export function useDisclosure(props: UseDisclosureProps = {}) {
  const handleOpen = useCallbackRef(props.onOpen)
  const handleClose = useCallbackRef(props.onClose)

  const [openState, setOpen] = useState(props.defaultOpen || false)

  const isOpen = props.isOpen !== undefined ? props.isOpen : openState
  const controlled = props.isOpen !== undefined

  const onClose = useCallback(() => {
    if (!controlled) setOpen(false)
    handleClose?.()
  }, [controlled, handleClose])

  const onOpen = useCallback(() => {
    if (!controlled) setOpen(true)
    handleOpen?.()
  }, [controlled, handleOpen])

  const onOpenChange = useCallback(() => {
    if (isOpen) {
      onClose()
    } else {
      onOpen()
    }
  }, [isOpen, onOpen, onClose])

  return {
    isOpen,
    onOpen,
    onClose,
    onOpenChange,
    setOpen,
  }
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>
