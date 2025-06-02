import { cn } from "../lib/utils"

interface SkeletonProps extends React.ComponentProps<"div"> {
  /**
   * Whether the skeleton is loaded
   * @default false
   */
  isLoaded?: boolean
}

const Skeleton = ({ className, isLoaded, children, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "bg-accent group animate-pulse rounded-md data-[loaded=true]:animate-none",
        className,
      )}
      data-slot="skeleton"
      data-loaded={isLoaded ? "true" : undefined}
      {...props}
    >
      {children && (
        <div className="opacity-0 transition-opacity duration-300 group-data-[loaded=true]:opacity-100 motion-reduce:transition-none">
          {children}
        </div>
      )}
    </div>
  )
}

export { Skeleton }
export type { SkeletonProps }
