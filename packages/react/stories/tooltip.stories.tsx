import type { Meta } from "@storybook/react"
import { Button, componentColors, Tooltip } from "../src"

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

export const Default = (args: any) => (
  <Tooltip.Trigger>
    <Button>Hover me</Button>
    <Tooltip {...args}>I am a tooltip</Tooltip>
  </Tooltip.Trigger>
)
