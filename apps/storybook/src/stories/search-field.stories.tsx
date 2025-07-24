import type { Meta, StoryObj } from "@storybook/react"
import { Button, Form, SearchField } from "@vela-ui/react"

const meta = {
  title: "Components/SearchField",
  component: SearchField,
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
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Search for a product",
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <SearchField {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  args: {
    label: "Search",
    description: "Search for a product",
    placeholder: "Search for a product",
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <SearchField {...args} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Search for a product",
    isDisabled: true,
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <SearchField {...args} />
    </div>
  ),
}

export const ReadOnly: Story = {
  args: {
    placeholder: "Search for a product",
    isReadOnly: true,
  },
  render: (args) => <SearchField {...args} />,
}

export const Validation: Story = {
  args: {
    label: "Email",
    errorMessage: "Invalid email",
    placeholder: "Enter your email",
  },
  render: (args) => (
    <Form className="flex flex-col gap-4">
      <SearchField name="email" isRequired {...args} />
      <Button type="submit">Submit</Button>
    </Form>
  ),
}
