import type { Meta, StoryObj } from "@storybook/react"
import { Button, Tooltip, TooltipTrigger } from "@vela-ui/react"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "right", "left"],
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
    <TooltipTrigger delay={100} closeDelay={100}>
      <Button variant="outline">Hover</Button>
      <Tooltip {...args} />
    </TooltipTrigger>
  ),
}
