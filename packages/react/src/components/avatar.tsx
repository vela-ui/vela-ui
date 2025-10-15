/**
 * @see https://github.com/radix-ui/primitives/blob/main/packages/react/avatar/src/avatar.tsx
 */
import React, { useEffect, useLayoutEffect, useState } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { useCallbackRef, useIsHydrated } from "../hooks"
import { createContext } from "../lib/context"

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error"

type AvatarContextValue = {
  imageLoadingStatus: ImageLoadingStatus
  onImageLoadingStatusChange(status: ImageLoadingStatus): void
}

const avatarVariants = tv({
  slots: {
    root: "relative inline-flex shrink-0 overflow-hidden",
    image: "aspect-square size-full",
    fallback: "bg-muted flex size-full items-center justify-center select-none",
  },
  variants: {
    size: {
      xs: { root: "size-6" },
      sm: { root: "size-8" },
      md: { root: "size-10" },
      lg: { root: "size-12" },
      xl: { root: "size-14" },
    },
    shape: {
      circle: { root: "rounded-full" },
      square: { root: "rounded-sm" },
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
})

const { root, image, fallback } = avatarVariants()

const [AvatarProvider, useAvatarContext] = createContext<
  VariantProps<typeof avatarVariants> & AvatarContextValue
>({
  name: "AvatarContext",
})

type AvatarProps = React.ComponentProps<"span"> & VariantProps<typeof avatarVariants>
function Avatar({ className, shape, size, ...props }: AvatarProps) {
  const [imageLoadingStatus, setImageLoadingStatus] = React.useState<ImageLoadingStatus>("idle")

  return (
    <AvatarProvider
      value={{
        shape,
        size,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
      }}
    >
      <span data-slot="avatar" className={root({ className, shape, size })} {...props} />
    </AvatarProvider>
  )
}

type AvatarImageProps = React.ComponentProps<"img"> & {
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
}
function AvatarImage({
  src,
  className,
  onLoadingStatusChange = () => {},
  ...props
}: AvatarImageProps) {
  const context = useAvatarContext()
  const imageLoadingStatus = useImageLoadingStatus(src, props)
  const handleLoadingStatusChange = useCallbackRef((status: ImageLoadingStatus) => {
    onLoadingStatusChange(status)
    context.onImageLoadingStatusChange(status)
  })

  useLayoutEffect(() => {
    if (imageLoadingStatus !== "idle") {
      handleLoadingStatusChange(imageLoadingStatus)
    }
  }, [imageLoadingStatus, handleLoadingStatusChange])

  return imageLoadingStatus === "loaded" ? (
    <img data-slot="avatar-image" className={image({ className })} src={src} {...props} />
  ) : null
}

type AvatarFallbackProps = React.ComponentProps<"span"> & { delayMs?: number }
function AvatarFallback({ className, delayMs, ...props }: AvatarFallbackProps) {
  const context = useAvatarContext()
  const [canRender, setCanRender] = useState(delayMs === undefined)

  useEffect(() => {
    if (delayMs !== undefined) {
      const timerId = window.setTimeout(() => setCanRender(true), delayMs)
      return () => window.clearTimeout(timerId)
    }
  }, [delayMs])

  return canRender && context.imageLoadingStatus !== "loaded" ? (
    <span data-slot="avatar-fallback" className={fallback({ className })} {...props} />
  ) : null
}

function resolveLoadingStatus(image: HTMLImageElement | null, src?: string): ImageLoadingStatus {
  if (!image) {
    return "idle"
  }
  if (!src) {
    return "error"
  }
  if (image.src !== src) {
    image.src = src
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading"
}

function useImageLoadingStatus(
  src: string | undefined,
  { referrerPolicy, crossOrigin }: AvatarImageProps,
) {
  const isHydrated = useIsHydrated()
  const imageRef = React.useRef<HTMLImageElement | null>(null)
  const image = (() => {
    if (!isHydrated) return null
    if (!imageRef.current) {
      imageRef.current = new window.Image()
    }
    return imageRef.current
  })()

  const [loadingStatus, setLoadingStatus] = React.useState<ImageLoadingStatus>(() =>
    resolveLoadingStatus(image, src),
  )

  useLayoutEffect(() => {
    setLoadingStatus(resolveLoadingStatus(image, src))
  }, [image, src])

  useLayoutEffect(() => {
    const updateStatus = (status: ImageLoadingStatus) => () => {
      setLoadingStatus(status)
    }

    if (!image) return

    const handleLoad = updateStatus("loaded")
    const handleError = updateStatus("error")
    image.addEventListener("load", handleLoad)
    image.addEventListener("error", handleError)
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin
    }

    return () => {
      image.removeEventListener("load", handleLoad)
      image.removeEventListener("error", handleError)
    }
  }, [image, crossOrigin, referrerPolicy])

  return loadingStatus
}

export { Avatar, AvatarFallback, AvatarImage }
export type { AvatarFallbackProps, AvatarImageProps, AvatarProps }
