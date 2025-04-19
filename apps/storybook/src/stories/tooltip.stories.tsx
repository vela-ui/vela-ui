import type { Meta, StoryObj } from "@storybook/react"
import { Button, componentColors, Tooltip } from "@vela-ui/react"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: componentColors,
    },
    showArrow: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    showArrow: true,
    children: "I am a tooltip",
  },
  render: (args) => (
    <Tooltip.Trigger>
      <Button>Hover me</Button>
      <Tooltip {...args} />
    </Tooltip.Trigger>
  ),
}
