"use client"

import { Keyboard } from "react-aria-components"
import { tv } from "tailwind-variants"

const KbdVariants = tv({
  base: "text-muted-foreground inline-flex min-w-5 items-center justify-center rounded-sm border p-1 font-sans text-xs leading-none tracking-widest",
})

type KbdProps = React.ComponentProps<typeof Keyboard>

function Kbd({ className, ...props }: KbdProps) {
  return <Keyboard className={KbdVariants({ className })} {...props} />
}

export { Kbd, KbdVariants }
export type { KbdProps }
