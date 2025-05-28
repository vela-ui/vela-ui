import type { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps, Button } from "@vela-ui/react"
import { HeartIcon } from "lucide-react"

const variants = ["default", "secondary", "destructive", "outline"] as const

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
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
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

const BadgeTemplate = (args: BadgeProps) => (
  <div className="flex items-center gap-2">
    {variants.map((variant) => (
      <Badge key={variant} {...args} variant={variant}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)}
      </Badge>
    ))}
  </div>
)

export const Default: Story = {
  render: (args) => <Badge {...args}>Default</Badge>,
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <BadgeTemplate {...args} />
    </div>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args}>
        <HeartIcon />
        Badge
      </Badge>
      <Badge {...args} variant="secondary">
        <HeartIcon />
        Badge
      </Badge>
      <Badge {...args} variant="destructive">
        <HeartIcon />
        Badge
      </Badge>
      <Badge {...args} variant="outline">
        <HeartIcon />
        Badge
      </Badge>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args} className="h-8 px-4 text-base [&>svg]:size-4">
        <HeartIcon />
        Large
      </Badge>
    </div>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button variant="outline">
        Inbox
        <Badge {...args}>+99</Badge>
      </Button>
    </div>
  ),
}
