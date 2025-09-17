import type { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "@vela-ui/react"

const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
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

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      {sizes.map((size) => (
        <Textarea key={size} {...args} size={size} placeholder={`Size (${size})`} />
      ))}
    </div>
  ),
}
