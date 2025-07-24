import type { Meta, StoryObj } from "@storybook/react"
import { Button, Form, NumberField } from "@vela-ui/react"

const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/NumberField",
  component: NumberField,
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
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof NumberField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NumberField {...args} label="Enter Number" description="Enter a number between 1 and 10" />
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-4">
      {sizes.map((size) => (
        <NumberField key={size} {...args} size={size} placeholder={`Size (${size})`} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: 10,
    isDisabled: true,
  },
  render: (args) => <NumberField label="Disabled" {...args} />,
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 10,
    isReadOnly: true,
  },
  render: (args) => <NumberField label="ReadOnly" {...args} />,
}

export const Validation: Story = {
  render: (args) => (
    <Form className="flex flex-col gap-4">
      <NumberField label="Enter Number" name="number" isRequired {...args} />
      <Button type="submit">Submit</Button>
    </Form>
  ),
}
