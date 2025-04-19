import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertProps, Button, componentStatuses, SuccessIcon } from "@vela-ui/react"

const variants = ["default", "dash", "soft", "outline"] as const

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: variants,
    },
    color: {
      control: {
        type: "select",
      },
      options: componentStatuses,
    },
    hideIcon: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

const Template = (args: AlertProps) => (
  <div className="flex flex-col gap-4">
    <Alert {...args} color="info">
      New software update available.
    </Alert>
    <Alert {...args} color="success">
      Your purchase has been confirmed!
    </Alert>
    <Alert {...args} color="warning">
      Warning: Invalid email address!
    </Alert>
    <Alert {...args} color="error">
      Error! Task failed successfully.
    </Alert>
  </div>
)

export const Default: Story = {
  render: (args) => <Alert {...args}>New software update available.</Alert>,
}

export const Soft: Story = {
  args: {
    variant: "soft",
  },
  render: Template,
}

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: Template,
}

export const Dash: Story = {
  args: {
    variant: "dash",
  },
  render: Template,
}

export const Responsive: Story = {
  args: {
    responsive: true,
  },
  render: (args) => (
    <Alert {...args}>
      <div>
        <h3 className="font-bold">New message!</h3>
        <div className="text-sm">You have 1 unread message</div>
      </div>
      <Button>See</Button>
    </Alert>
  ),
}

export const CustomStyles: Story = {
  render: (args) => (
    <Alert {...args} icon={<SuccessIcon className="size-10 text-green-500" />}>
      <div>
        <h3 className="font-bold">New message!</h3>
        <div className="text-sm">You have 1 unread message</div>
      </div>
      <Button>See</Button>
    </Alert>
  ),
}
