import { tv, type VariantProps } from "tailwind-variants"

import { focusButtonStyles } from "../primitive"

const buttonStyles = tv({
  extend: focusButtonStyles,
  base: [
    "relative inline-flex items-center justify-center whitespace-nowrap border font-medium",
    "transition data-[pressed=true]:scale-[0.97]",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    color: {
      primary: [
        "outline-primary bg-primary/95 [--btn-bg:theme(--color-primary/95%)] [--btn-border:var(--color-primary)] [--btn-fg:var(--color-primary-fg)] dark:[--btn-bg:theme(--color-primary/90%)]",
        "[--btn-bg-hovered:theme(--color-primary/87%)] [--btn-border-hovered:theme(--color-primary/87%)] dark:[--btn-bg-hovered:theme(--color-primary)] dark:[--btn-border-hovered:theme(--color-primary)]",
      ],
      secondary: [
        "[--btn-bg:theme(--color-secondary/95%)] [--btn-border:theme(--color-secondary-fg/10%)] [--btn-fg:var(--color-secondary-fg)] dark:[--btn-bg:theme(--color-secondary/85%)] dark:[--btn-border:theme(--color-secondary-fg/7%)]",
        "[--btn-bg-hovered:color-mix(in_oklab,var(--color-secondary)_60%,white_20%)] dark:[--btn-bg-hovered:color-mix(in_oklab,var(--color-secondary)_96%,white_4%)]",
      ],
      warning: [
        "[--btn-warning:theme(--color-warning/97%)]",
        "[--btn-warning-hovered:color-mix(in_oklab,var(--color-warning)_85%,white_15%)]",
        "dark:[--btn-warning-hovered:color-mix(in_oklab,var(--color-warning)_90%,white_10%)]",
        "outline-warning [--btn-bg:var(--btn-warning)] [--btn-border:var(--btn-warning)] [--btn-fg:var(--color-warning-fg)]",
        "[--btn-bg-hovered:var(--btn-warning-hovered)] [--btn-border-hovered:var(--btn-warning-hovered)]",
      ],
      danger: [
        "outline-danger [--btn-bg:theme(--color-danger/95%)] [--btn-border:var(--color-danger)] [--btn-fg:var(--color-danger-fg)] dark:[--btn-bg:var(--color-danger)]",
        "[--btn-danger-hovered:color-mix(in_oklab,var(--color-danger)_93%,white_7%)]",
        "dark:[--btn-danger-hovered:color-mix(in_oklab,var(--color-danger)_96%,white_4%)]",
        "[--btn-bg-hovered:var(--btn-danger-hovered)] [--btn-border-hovered:var(--btn-danger-hovered)]",
      ],
    },
    variant: {
      solid: [
        "inset-ring-0 dark:inset-ring dark:border-0",
        "inset-ring-(--btn-border) inset-shadow-2xs border-(--btn-border) bg-(--btn-bg) text-(--btn-fg)",
        "data-hovered:bg-(--btn-bg-hovered) data-hovered:ring-(--btn-border-hovered)",
        "data-pressed:border-(--btn-border) data-pressed:bg-(--btn-bg)",
      ],
      outline: ["data-hovered:bg-secondary data-pressed:bg-secondary border-(--btn-border) border"],
      plain: ["data-hovered:bg-secondary data-pressed:bg-secondary border-transparent"],
    },
    size: {
      xs: "h-7 gap-1 px-2 text-xs/4",
      sm: "h-8 gap-1 px-3 text-xs/4",
      md: "h-10 gap-2 px-4 text-sm/5",
      lg: "h-12 gap-3 px-6 text-base",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    isDisabled: {
      true: "inset-shadow-none dark:inset-ring-0 pointer-events-none cursor-default border-0 opacity-50 ring-0",
      false: "cursor-pointer",
    },
    isPending: {
      true: "cursor-default opacity-50",
    },
    isIconOnly: {
      true: "px-0",
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
    rounded: "lg",
  },
  compoundVariants: [
    {
      isIconOnly: true,
      size: "xs",
      className: "size-7 min-w-7",
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "size-8 min-w-8",
    },
    {
      isIconOnly: true,
      size: "md",
      class: "size-10 min-w-10",
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "size-12 min-w-12",
    },
  ],
})

export type ButtonVariantProps = VariantProps<typeof buttonStyles>

export { buttonStyles }
