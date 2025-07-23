import { tv } from "tailwind-variants"

const cardVariants = tv({
  slots: {
    root: "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
    header:
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
    title: "leading-none font-semibold",
    description: "text-muted-foreground text-sm",
    action: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
    content: "px-6",
    footer: "flex items-center px-6 [.border-t]:pt-6",
  },
})

const { root, header, title, description, action, content, footer } = cardVariants()

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={root({ className })} {...props} />
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={header({ className })} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-title" className={title({ className })} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-description" className={description({ className })} {...props} />
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-action" className={action({ className })} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={content({ className })} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={footer({ className })} {...props} />
}

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
