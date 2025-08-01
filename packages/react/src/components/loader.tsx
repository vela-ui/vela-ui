import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"
import { LoaderCircleIcon, LoaderRingIcon } from "../icons"
import { cn } from "../lib/utils"

const loaderVariants = tv({
  base: "relative",
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8",
      xl: "size-10",
    },
  },
  defaultVariants: {
    size: "sm",
  },
})

function Default({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <LoaderCircleIcon
      className={cn("size-4 animate-spin", className)}
      data-slot="icon"
      {...props}
    />
  )
}

const Ring = ({ className, ...props }: React.ComponentProps<"svg">) => (
  <LoaderRingIcon className={cn("size-4 animate-spin", className)} data-slot="icon" {...props} />
)

function Spin({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("size-4 stroke-current", className)}
      data-slot="icon"
      viewBox="0 0 2400 2400"
      {...props}
    >
      <g strokeWidth="200" strokeLinecap="round" fill="none">
        <line x1="1200" y1="600" x2="1200" y2="100" />
        <line opacity="0.5" x1="1200" y1="2300" x2="1200" y2="1800" />
        <line opacity="0.917" x1="900" y1="680.4" x2="650" y2="247.4" />
        <line opacity="0.417" x1="1750" y1="2152.6" x2="1500" y2="1719.6" />
        <line opacity="0.833" x1="680.4" y1="900" x2="247.4" y2="650" />
        <line opacity="0.333" x1="2152.6" y1="1750" x2="1719.6" y2="1500" />
        <line opacity="0.75" x1="600" y1="1200" x2="100" y2="1200" />
        <line opacity="0.25" x1="2300" y1="1200" x2="1800" y2="1200" />
        <line opacity="0.667" x1="680.4" y1="1500" x2="247.4" y2="1750" />
        <line opacity="0.167" x1="2152.6" y1="650" x2="1719.6" y2="900" />
        <line opacity="0.583" x1="900" y1="1719.6" x2="650" y2="2152.6" />
        <line opacity="0.083" x1="1750" y1="247.4" x2="1500" y2="680.4" />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          keyTimes="0;0.08333;0.16667;0.25;0.33333;0.41667;0.5;0.58333;0.66667;0.75;0.83333;0.91667"
          values="0 1199 1199;30 1199 1199;60 1199 1199;90 1199 1199;120 1199 1199;150 1199 1199;180 1199 1199;210 1199 1199;240 1199 1199;270 1199 1199;300 1199 1199;330 1199 1199"
          dur="0.83333s"
          begin="0.08333s"
          repeatCount="indefinite"
          calcMode="discrete"
        />
      </g>
    </svg>
  )
}

const LOADERS = {
  default: Default,
  ring: Ring,
  spin: Spin,
}

const DEFAULT_VARIANT = "default"

interface LoaderProps
  extends Omit<React.ComponentProps<"svg">, "display" | "opacity">,
    VariantProps<typeof loaderVariants> {
  ref?: React.Ref<SVGSVGElement>
  variant?: keyof typeof LOADERS
}

function Loader(props: LoaderProps) {
  const { className, size, ref, variant, ...otherProps } = props
  const LoaderComponent = LOADERS[variant ?? DEFAULT_VARIANT]

  return (
    <LoaderComponent
      role="presentation"
      ref={ref}
      className={loaderVariants({ size, className })}
      {...otherProps}
    />
  )
}

export { Loader }
export type { LoaderProps }
