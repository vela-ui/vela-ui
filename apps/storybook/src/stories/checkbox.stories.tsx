import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "@vela-ui/react"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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

export const Indeterminate: Story = {
  render: (args) => (
    <Checkbox {...args} isIndeterminate>
      Indeterminate
    </Checkbox>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Checkbox {...args} isDisabled>
      Disabled
    </Checkbox>
  ),
}

export const Custom: Story = {
  render: (args) => (
    <Checkbox
      {...args}
      className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 text-sm leading-none font-medium select-none data-[selected=true]:border-blue-600 data-[selected=true]:bg-blue-50 data-[selected=true]:[&_[data-slot=checkbox-indicator]]:bg-blue-600"
    >
      <div className="grid gap-1.5 font-normal">
        <p className="text-sm leading-none font-medium">Enable notifications</p>
        <p className="text-muted-foreground text-sm">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Checkbox>
  ),
}
