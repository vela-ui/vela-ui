import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps, LinkButton } from "@vela-ui/react"
import { HeartIcon, Loader2 } from "lucide-react"

const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const
const sizes = ["default", "sm", "lg", "icon"] as const

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    size: "default",
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

const ButtonTemplate = (args: ButtonProps) => (
  <div className="flex items-center gap-2">
    {variants.map((variant) => (
      <Button key={variant} {...args} variant={variant}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Button>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <ButtonTemplate {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="default">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: ButtonTemplate,
}

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: ButtonTemplate,
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
            <Button key={variant} variant={variant} size="icon" {...args}>
              <HeartIcon />
            </Button>
          ))}
      </div>
    </div>
  ),
}

export const Loading: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args}>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      <Button {...args} variant="outline">
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
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
