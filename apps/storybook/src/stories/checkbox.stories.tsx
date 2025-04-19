import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox, componentColors, componentSizes } from "@vela-ui/react"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
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
    isIndeterminate: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <Checkbox {...args}>Checkbox</Checkbox>,
}
