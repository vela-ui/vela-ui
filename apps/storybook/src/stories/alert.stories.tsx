import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle, Button } from "@vela-ui/react"
import { CircleAlertIcon, CircleCheckIcon } from "lucide-react"

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <CircleCheckIcon />
      <AlertTitle>Success! Your changes have been saved</AlertTitle>
      <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
    </Alert>
  ),
}

export const LongText: Story = {
  render: (args) => (
    <Alert {...args}>
      <CircleAlertIcon />
      <AlertTitle>
        This is an extremely long alert title that spans multiple lines to demonstrate how the
        component handles very lengthy headings while maintaining readability and proper text
        wrapping behavior
      </AlertTitle>
      <AlertDescription>
        This is an equally long description that contains detailed information about the alert. It
        shows how the component can accommodate extensive content while preserving proper spacing,
        alignment, and readability across different screen sizes and viewport widths. This helps
        ensure the user experience remains consistent regardless of the content length.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <CircleAlertIcon />
      <AlertTitle>Unable to process your payment.</AlertTitle>
      <AlertDescription>
        <p>Please verify your billing information and try again.</p>
        <ul className="list-inside list-disc text-sm">
          <li>Check your card details</li>
          <li>Ensure sufficient funds</li>
          <li>Verify billing address</li>
        </ul>
      </AlertDescription>
    </Alert>
  ),
}

export const WithButton: Story = {
  render: (args) => (
    <Alert {...args} className="flex items-center">
      <CircleCheckIcon />
      <div className="flex-1">
        <AlertTitle>New message!</AlertTitle>
        <AlertDescription>You have 1 unread message</AlertDescription>
      </div>
      <Button>See</Button>
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
      <AlertTitle>Plot Twist: This Alert is Actually Amber!</AlertTitle>
      <AlertDescription>This one has custom colors for light and dark mode.</AlertDescription>
    </Alert>
  ),
}
