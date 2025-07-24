import type { Meta, StoryObj } from "@storybook/react"
import { Button, CloseIcon, Form, TextField } from "@vela-ui/react"

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    errorMessage: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "w-96",
    label: "Full Name",
    description: "Please enter your full name",
    placeholder: "John Doe",
  },
}

export const Disabled: Story = {
  args: {
    className: "w-96",
    label: "Full Name",
    description: "Please enter your full name",
    placeholder: "John Doe",
    isDisabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    className: "w-96",
    label: "Full Name",
    description: "Please enter your full name",
    placeholder: "John Doe",
    isReadOnly: true,
  },
}

export const Validation: Story = {
  args: {
    className: "w-96",
    label: "Full Name",
    description: "Please enter your full name",
    placeholder: "John Doe",
    errorMessage: "Invalid full name",
  },
  render: (args) => (
    <Form className="flex flex-col gap-4">
      <TextField name="fullName" isRequired {...args} />
      <Button type="submit">Submit</Button>
    </Form>
  ),
}

export const WithElement: Story = {
  args: {
    className: "w-96",
    inputClassName: "pl-16",
    label: "Website",
    description: "Please enter your website",
    placeholder: "yoursite.com",
    startElement: "https://",
    endElement: <CloseIcon />,
  },
}
