import type { Meta, StoryObj } from "@storybook/react"
import { componentColors, componentSizes, TextArea } from "@vela-ui/react"

const meta = {
  title: "Components/TextArea",
  component: TextArea,
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
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "vela@example.com",
  },
}
