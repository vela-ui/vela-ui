import type { Meta, StoryObj } from "@storybook/react"
import { ToggleButton, ToggleButtonGroup } from "@vela-ui/react"

const variants = ["default", "outline", "ghost"] as const
const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/ToggleButtonGroup",
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    selectionMode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple"],
    },
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
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
} satisfies Meta<typeof ToggleButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton id="left">Left</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="right">Right</ToggleButton>
    </ToggleButtonGroup>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <ToggleButtonGroup key={size} {...args} size={size} variant="outline">
          <ToggleButton id="left">Left {size}</ToggleButton>
          <ToggleButton id="center">Center {size}</ToggleButton>
          <ToggleButton id="right">Right {size}</ToggleButton>
        </ToggleButtonGroup>
      ))}
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    variant: "outline",
    orientation: "vertical",
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton id="top">Top</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="bottom">Bottom</ToggleButton>
    </ToggleButtonGroup>
  ),
}

export const Disabled: Story = {
  args: {
    variant: "outline",
    isDisabled: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ToggleButtonGroup {...args}>
        <ToggleButton id="left">Left</ToggleButton>
        <ToggleButton id="center">Center</ToggleButton>
        <ToggleButton id="right">Right</ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup>
        <ToggleButton id="left">Left</ToggleButton>
        <ToggleButton id="center" isDisabled>
          Center
        </ToggleButton>
        <ToggleButton id="right">Right</ToggleButton>
      </ToggleButtonGroup>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    selectionMode: "multiple",
  },
  render: (args) => (
    <ToggleButtonGroup {...args}>
      <ToggleButton id="left">Left</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="right">Right</ToggleButton>
    </ToggleButtonGroup>
  ),
}
