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
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} size="xs">
        Xsmall
      </Checkbox>
      <Checkbox {...args} size="sm">
        Small
      </Checkbox>
      <Checkbox {...args} size="md">
        Medium
      </Checkbox>
      <Checkbox {...args} size="lg">
        Large
      </Checkbox>
      <Checkbox {...args} size="xl">
        Xlarge
      </Checkbox>
    </div>
  ),
}

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} color="primary">
        primary
      </Checkbox>
      <Checkbox {...args} color="secondary">
        secondary
      </Checkbox>
      <Checkbox {...args} color="accent">
        accent
      </Checkbox>
      <Checkbox {...args} color="neutral">
        neutral
      </Checkbox>
      <Checkbox {...args} color="info">
        info
      </Checkbox>
      <Checkbox {...args} color="success">
        success
      </Checkbox>
      <Checkbox {...args} color="warning">
        warning
      </Checkbox>
      <Checkbox {...args} color="error">
        error
      </Checkbox>
    </div>
  ),
}
