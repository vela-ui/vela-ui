import type { Meta, StoryObj } from "@storybook/react"
import { Button, LinkButton, Loader } from "@vela-ui/react"
import { HeartIcon } from "lucide-react"

const variants = [
  "primary",
  "secondary",
  "accent",
  "neutral",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const
const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: variants,
    },
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isPending: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {sizes.map((size) => (
        <Button key={size} {...args} size={size}>
          Button ({size})
        </Button>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
}

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {variants
          .filter((variant) => variant !== "link")
          .map((variant) => (
            <Button key={variant} variant={variant} {...args}>
              <HeartIcon />
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
      </div>
      <div className="flex items-center gap-2">
        {variants
          .filter((variant) => variant !== "link")
          .map((variant) => (
            <Button key={variant} variant={variant} {...args}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
              <HeartIcon />
            </Button>
          ))}
      </div>
      <div className="flex items-center gap-2">
        {variants
          .filter((variant) => variant !== "link")
          .map((variant) => (
            <Button key={variant} variant={variant} shape="square" {...args}>
              <HeartIcon />
            </Button>
          ))}
      </div>
      <div className="flex items-center gap-2">
        {variants
          .filter((variant) => variant !== "link")
          .map((variant) => (
            <Button key={variant} variant={variant} shape="circle" {...args}>
              <HeartIcon />
            </Button>
          ))}
      </div>
    </div>
  ),
}

export const ButtonLink: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <LinkButton href="https://github.com/vela-ui/vela-ui" target="_blank">
        Button Link
      </LinkButton>
    </div>
  ),
}

export const CustomLoader: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args} loader={<Loader />}>
        Please wait
      </Button>
      <Button {...args} variant="outline" loader={<Loader variant="ring" />}>
        Please wait
      </Button>
      <Button {...args} variant="outline" loader={<Loader variant="spin" />}>
        Please wait
      </Button>
    </div>
  ),
}
