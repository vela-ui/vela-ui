import { Meta, StoryObj } from "@storybook/react"
import { Loader } from "@vela-ui/react"

const variants = ["default", "ring", "spin"] as const
const sizes = ["sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
    },
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      {sizes.map((size) => (
        <Loader key={size} size={size} {...args} />
      ))}
    </div>
  ),
}

export const Variants: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <div className="flex items-center gap-6">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <Loader variant={variant} {...args} />
          <span>{variant}</span>
        </div>
      ))}
    </div>
  ),
}

export const Colors: Story = {
  args: {
    size: "lg",
    variant: "ring",
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      <Loader className="text-red-500" {...args} />
      <Loader className="text-green-500" {...args} />
      <Loader className="text-blue-500" {...args} />
      <Loader className="text-yellow-500" {...args} />
      <Loader className="text-purple-500" {...args} />
      <Loader className="text-pink-500" {...args} />
      <Loader className="text-black" {...args} />
    </div>
  ),
}
