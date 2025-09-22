import type { Meta, StoryObj } from "@storybook/react"
import { LinkButton } from "@vela-ui/react"

const meta = {
  title: "Components/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "neutral",
        "primary",
        "secondary",
        "accent",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: {
        type: "select",
      },
      options: ["rectangle", "square", "circle"],
    },
  },
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: "https://tailwindcss.com",
    target: "_blank",
    children: "Link Button",
  },
}

export const Variants: Story = {
  args: {
    href: "https://tailwindcss.com",
    target: "_blank",
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {(
        [
          "neutral",
          "primary",
          "secondary",
          "accent",
          "destructive",
          "outline",
          "ghost",
          "link",
        ] as const
      ).map((variant) => (
        <LinkButton key={variant} {...args} variant={variant}>
          {variant}
        </LinkButton>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    href: "https://tailwindcss.com",
    target: "_blank",
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <LinkButton key={size} {...args} size={size}>
          {size}
        </LinkButton>
      ))}
    </div>
  ),
}

export const Shapes: Story = {
  args: {
    href: "https://tailwindcss.com",
    target: "_blank",
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      {(["rectangle", "square", "circle"] as const).map((shape) => (
        <LinkButton key={shape} {...args} shape={shape}>
          {shape}
        </LinkButton>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Disabled Link Button",
  },
}
