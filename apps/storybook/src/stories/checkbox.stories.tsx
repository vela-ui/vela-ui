import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox, cn } from "@vela-ui/react"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
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

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Checkbox {...args} size="sm">
        Small
      </Checkbox>
      <Checkbox {...args} size="md">
        Medium
      </Checkbox>
      <Checkbox {...args} size="lg">
        Large
      </Checkbox>
    </div>
  ),
}

export const Custom: Story = {
  render: (args) => (
    <Checkbox
      {...args}
      className={({ isSelected }) =>
        cn(
          "hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 text-sm leading-none font-medium select-none",
          {
            "border-blue-600 bg-blue-50 dark:border-blue-900 dark:bg-blue-950 [&_[data-slot=checkbox-indicator]]:border-blue-600 [&_[data-slot=checkbox-indicator]]:bg-blue-600 [&_[data-slot=checkbox-indicator]]:text-white":
              isSelected,
          },
        )
      }
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
