import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@vela-ui/react"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
    className: " w-96",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Type your message here.",
    disabled: true,
    className: " w-96",
  },
}
