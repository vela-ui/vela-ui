import type { Meta, StoryObj } from "@storybook/react"
import { ToggleButton } from "@vela-ui/react"
import { PinIcon } from "lucide-react"

const variants = ["default", "outline", "ghost"] as const
const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/ToggleButton",
  component: ToggleButton,
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
  },
} satisfies Meta<typeof ToggleButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Pin",
  },
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {variants.map((variant) => (
        <ToggleButton key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </ToggleButton>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {sizes.map((size) => (
        <ToggleButton key={size} {...args} size={size} shape="circle">
          <PinIcon />
        </ToggleButton>
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
        <ToggleButton key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </ToggleButton>
      ))}
    </div>
  ),
}
