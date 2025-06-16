import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "@vela-ui/react"

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    indicatorClassName: {
      control: {
        type: "text",
      },
    },
    thumbClassName: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Wi-Fi",
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Switch {...args} size="sm">
        Small
      </Switch>
      <Switch {...args}>Medium</Switch>
      <Switch {...args} size="lg">
        Large
      </Switch>
      <Switch {...args} size="xl">
        Extra Large
      </Switch>
    </div>
  ),
}

export const Colors: Story = {
  args: {
    children: "Bluetooth",
    defaultSelected: true,
    indicatorClassName: "group-data-[selected=true]:bg-blue-500",
  },
}

export const Disabled: Story = {
  args: {
    children: "Bluetooth",
    isDisabled: true,
  },
}

export const Custom: Story = {
  render: (args) => (
    <Switch
      {...args}
      className="flex flex-row-reverse gap-6 rounded-lg border p-4 data-[selected=true]:border-blue-600"
      indicatorClassName="group-data-[selected=true]:bg-blue-600"
    >
      <div className="flex flex-col gap-1">
        <div className="font-medium">Share across devices</div>
        <div className="text-muted-foreground text-sm font-normal">
          Focus is shared across devices, and turns off when you leave the app.
        </div>
      </div>
    </Switch>
  ),
}
