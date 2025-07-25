import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertContent, AlertDescription, AlertTitle, Button } from "@vela-ui/react"
import { CircleAlertIcon, CircleCheckIcon } from "lucide-react"

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <CircleCheckIcon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
    </Alert>
  ),
}

export const WithDescription: Story = {
  render: (args) => (
    <Alert {...args}>
      <CircleAlertIcon />
      <AlertContent>
        <AlertTitle>Browser Update available</AlertTitle>
        <AlertDescription>For the best experience, please update your browser.</AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <Alert {...args}>
      <CircleCheckIcon />
      <AlertContent>
        <AlertTitle>New message!</AlertTitle>
        <AlertDescription>You have 1 unread message</AlertDescription>
      </AlertContent>
      <Button className="self-center" size="sm">
        See
      </Button>
    </Alert>
  ),
}

export const CustomStyles: Story = {
  render: (args) => (
    <Alert
      {...args}
      className="border-amber-900 bg-amber-50 text-amber-900 dark:border-amber-950 dark:bg-amber-950 dark:text-amber-100"
    >
      <CircleCheckIcon />
      <AlertContent>
        <AlertTitle>Plot Twist: This Alert is Actually Amber!</AlertTitle>
        <AlertDescription>This one has custom colors for light and dark mode.</AlertDescription>
      </AlertContent>
    </Alert>
  ),
}
