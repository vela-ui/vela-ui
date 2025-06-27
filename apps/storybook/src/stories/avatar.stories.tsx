import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarFallback, AvatarImage } from "@vela-ui/react"

const sizes = ["sm", "md", "lg"] as const
const shapes = ["circle", "square"] as const

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    shape: {
      control: {
        type: "select",
      },
      options: shapes,
    },
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <Avatar key={size} {...args} size={size}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const Shapes: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      {shapes.map((shape) => (
        <Avatar key={shape} {...args} shape={shape}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="*:data-[slot=avatar]:ring-ring flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-offset-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  ),
}
