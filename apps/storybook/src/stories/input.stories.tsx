import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@vela-ui/react"

const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/Input",
  component: Input,
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
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "vela@example.com",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "vela@example.com",
    disabled: true,
  },
}

export const Types: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <Input {...args} placeholder="Text" />
      <Input {...args} type="password" placeholder="Password" />
      <Input {...args} type="email" placeholder="Email" />
      <Input {...args} type="number" placeholder="Number" />
      <Input {...args} type="search" placeholder="Search" />
      <Input {...args} type="tel" placeholder="Tel" />
      <Input {...args} type="url" placeholder="URL" />
      <Input {...args} type="file" />
      <Input {...args} type="date" placeholder="Date" />
      <Input {...args} type="time" placeholder="Time" />
      <Input {...args} type="datetime-local" placeholder="Datetime" />
      <Input {...args} type="month" placeholder="Month" />
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      {sizes.map((size) => (
        <Input key={size} {...args} size={size} placeholder={`Size (${size})`} />
      ))}
    </div>
  ),
}
