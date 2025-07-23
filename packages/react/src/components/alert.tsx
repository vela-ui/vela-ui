import type { VariantProps } from "tailwind-variants"
import { tv } from "tailwind-variants"

const alertVariants = tv({
  slots: {
    root: "bg-card text-card-foreground relative flex w-full items-start gap-3 rounded-lg border p-4 text-sm [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 [&>svg]:text-current",
    content: "flex flex-1 flex-col gap-1",
    title: "font-medium",
    description: "text-muted-foreground",
  },
})

const { root, content, title, description } = alertVariants()

interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {}

function Alert({ className, ...props }: AlertProps) {
  return <div data-slot="alert" role="alert" className={root({ className })} {...props} />
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-content" className={content({ className })} {...props} />
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-title" className={title({ className })} {...props} />
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-description" className={description({ className })} {...props} />
}

export { Alert, AlertContent, AlertDescription, AlertTitle }
export type { AlertProps }
