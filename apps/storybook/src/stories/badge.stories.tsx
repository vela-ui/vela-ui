import type { Meta, StoryObj } from "@storybook/react"
import { Badge, BadgeProps, Button, componentColors, componentSizes } from "@vela-ui/react"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    size: "md",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["outline", "soft", "dash", "ghost"],
    },
    color: {
      control: {
        type: "select",
      },
      options: componentColors,
    },
    size: {
      control: {
        type: "select",
      },
      options: componentSizes,
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
)

const ColorBadgeTemplate = (args: BadgeProps) => (
  <div className="flex items-center gap-2">
    {componentColors.map((color) => (
      <Badge key={color} {...args} color={color}>
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </Badge>
    ))}
  </div>
)

export const Default: Story = {
  render: (args) => <Badge {...args}>Default</Badge>,
}

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <ColorBadgeTemplate {...args} />
    </div>
  ),
}

export const Variants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-3 text-xl font-medium">Solid badges</h3>
        <ColorBadgeTemplate />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Soft badges</h3>
        <ColorBadgeTemplate variant="soft" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Outline badges</h3>
        <ColorBadgeTemplate variant="outline" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Dash badges</h3>
        <ColorBadgeTemplate variant="dash" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Ghost badges</h3>
        <Badge variant="ghost">Ghost</Badge>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    variant: "soft",
    color: "primary",
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Badge {...args} size="xs">
        Xsmall
      </Badge>
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
      <Badge {...args} size="xl">
        Xlarge
      </Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {componentColors.map((color) => (
        <Badge key={color} {...args} color={color}>
          <HeartIcon />
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Badge>
      ))}
    </div>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {componentColors.map((color) => (
        <Button key={color}>
          Inbox
          <Badge {...args} color={color}>
            +99
          </Badge>
        </Button>
      ))}
    </div>
  ),
}
