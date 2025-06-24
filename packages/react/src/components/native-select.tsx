import { tv } from "tailwind-variants"
import { ChevronDownIcon } from "../icons"
import { cn } from "../lib/utils"

const selectVariants = tv({
  base: [
    "border-input dark:bg-input/30 dark:hover:bg-input/50 w-full appearance-none rounded-md border bg-transparent px-3 pr-9 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow]",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:ring-destructive/20 aria-invalid:dark:ring-destructive/40 aria-invalid:border-destructive",
  ],
  variants: {
    size: {
      xs: "h-8",
      sm: "h-9",
      md: "h-10",
      lg: "h-11",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

interface NativeSelectProps extends Omit<React.ComponentPropsWithoutRef<"select">, "size"> {
  wrapperClassName?: string
  className?: string
  placeholder?: string
  size?: "xs" | "sm" | "md" | "lg"
}

function NativeSelect({
  className,
  wrapperClassName,
  placeholder,
  size = "md",
  ...props
}: NativeSelectProps) {
  return (
    <div className={cn("relative flex h-fit w-full", wrapperClassName)}>
      <select className={selectVariants({ className, size })} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {props.children}
      </select>
      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
        <ChevronDownIcon
          className={cn("text-muted-foreground size-4 opacity-50", {
            "size-3.5": size === "xs",
            "size-5": size === "lg",
          })}
        />
      </div>
    </div>
  )
}

export { NativeSelect }
