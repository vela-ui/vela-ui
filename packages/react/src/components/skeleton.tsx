import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const skeletonVariants = tv({
  base: "skeleton",
  variants: {
    variant: {
      pulse: "skeleton-pulse",
      shine: "skeleton-shine",
      none: "animate-none",
    },
  },
  defaultVariants: {
    variant: "pulse",
  },
})

interface SkeletonProps extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {
  /**
   * Whether the skeleton is loaded
   * @default false
   */
  isLoaded?: boolean
}

const Skeleton = ({ className, variant, isLoaded, children, ...props }: SkeletonProps) => {
  return (
    <div
      className={skeletonVariants({
        variant,
        className,
      })}
      data-loaded={isLoaded ? "true" : undefined}
      {...props}
    >
      {children && <div className="skeleton-content">{children}</div>}
    </div>
  )
}

export { Skeleton }
export type { SkeletonProps }
