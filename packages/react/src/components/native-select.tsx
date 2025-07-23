import { tv } from "tailwind-variants"

const selectVariants = tv({
  base: [
    "border-input dark:bg-input/30 dark:hover:bg-input/50 relative w-full appearance-none rounded-md border bg-transparent px-3 pr-9 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow]",
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
  className?: string
  placeholder?: string
  size?: "xs" | "sm" | "md" | "lg"
}

const styles = {
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.75rem center",
  backgroundSize: "1.25em",
  paddingRight: "2.5rem",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='oklch(70.8% 0 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
}

function NativeSelect({ className, placeholder, size = "md", ...props }: NativeSelectProps) {
  return (
    <select className={selectVariants({ className, size })} style={styles} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {props.children}
    </select>
  )
}

export { NativeSelect }
