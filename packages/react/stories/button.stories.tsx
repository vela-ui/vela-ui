import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps, componentColors, componentSizes } from "../src"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    size: "md",
    loaderPlacement: "start",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      description: "",
      options: ["solid", "outline", "soft", "dash", "ghost", "link"],
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

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="size-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
)

const ColorButtonTemplate = (args: ButtonProps) => (
  <div className="flex items-center gap-2">
    <Button {...args}>Default</Button>
    {componentColors.map((color) => (
      <Button key={color} {...args} color={color}>
        {color.charAt(0).toUpperCase() + color.slice(1)}
      </Button>
    ))}
  </div>
)

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args} color="neutral">
        Neutral
      </Button>
      <ColorButtonTemplate {...args} />
    </div>
  ),
}

export const Variants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-3 text-xl font-medium">Solid buttons</h3>
        <ColorButtonTemplate />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Soft buttons</h3>
        <ColorButtonTemplate variant="soft" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Outline buttons</h3>
        <ColorButtonTemplate variant="outline" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Dash buttons</h3>
        <ColorButtonTemplate variant="dash" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Ghost buttons</h3>
        <ColorButtonTemplate variant="ghost" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Link buttons</h3>
        <ColorButtonTemplate variant="link" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args} size="xs">
        Xsmall
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="xl">
        Xlarge
      </Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: ColorButtonTemplate,
}

export const Pending: Story = {
  args: {
    isPending: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {componentColors.map((color) => (
          <Button key={color} {...args} color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {componentColors.map((color) => (
          <Button
            key={color}
            {...args}
            color={color}
            variant="outline"
            loaderPlacement="end"
            size="lg"
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {componentColors.map((color) => (
          <Button key={color} {...args} color={color} variant="soft" size="xl" shape="square" />
        ))}
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {componentColors.map((color) => (
          <Button key={color} {...args} color={color}>
            <HeartIcon />
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {componentColors.map((color) => (
          <Button key={color} {...args} color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
            <HeartIcon />
          </Button>
        ))}
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button {...args} color="primary" shape="square">
          <HeartIcon />
        </Button>
        <Button {...args} color="primary" variant="soft" shape="square">
          <HeartIcon />
        </Button>
        <Button {...args} color="primary" variant="outline" shape="square">
          <HeartIcon />
        </Button>
        <Button {...args} color="primary" variant="dash" shape="square">
          <HeartIcon />
        </Button>
        <Button {...args} color="primary" variant="ghost" shape="square">
          <HeartIcon />
        </Button>
        <Button {...args} color="primary" variant="link" shape="square">
          <HeartIcon />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button {...args} color="secondary" shape="circle">
          <HeartIcon />
        </Button>
        <Button {...args} color="secondary" variant="soft" shape="circle">
          <HeartIcon />
        </Button>
        <Button {...args} color="secondary" variant="outline" shape="circle">
          <HeartIcon />
        </Button>
        <Button {...args} color="secondary" variant="dash" shape="circle">
          <HeartIcon />
        </Button>
        <Button {...args} color="secondary" variant="ghost" shape="circle">
          <HeartIcon />
        </Button>
        <Button {...args} color="secondary" variant="link" shape="circle">
          <HeartIcon />
        </Button>
      </div>
    </div>
  ),
}
