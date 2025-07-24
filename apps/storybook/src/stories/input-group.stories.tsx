import type { Meta, StoryObj } from "@storybook/react"
import { Button, CloseIcon, Input, InputGroup, Label, NativeSelect } from "@vela-ui/react"

const options = ["Aardvark", "Cat", "Dog", "Kangaroo", "Panda", "Snake"]

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    startElement: {
      control: {
        type: "text",
      },
    },
    endElement: {
      control: {
        type: "text",
      },
    },
    startAddon: {
      control: {
        type: "text",
      },
    },
    endAddon: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const StartAndEndContent: Story = {
  args: {
    children: <Input placeholder="yoursite.com" className="pl-16" />,
    startElement: "https://",
    endElement: <CloseIcon />,
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <Label>Please enter your website</Label>
      <InputGroup {...args} />
    </div>
  ),
}

export const StartAndEndAddon: Story = {
  args: {
    children: <Input placeholder="yoursite.com" />,
    startAddon: "https://",
    endAddon: ".com",
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <Label>Please enter your website</Label>
      <InputGroup {...args} />
    </div>
  ),
}

export const WithButton: Story = {
  args: {
    startAddon: "Full Name",
    children: (
      <>
        <Input placeholder="John" />
        <Input placeholder="Doe" />
        <Button data-slot="input-addon" variant="outline">
          Submit
        </Button>
      </>
    ),
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <InputGroup {...args} />
    </div>
  ),
}

export const WithSelect: Story = {
  args: {
    children: (
      <>
        <NativeSelect placeholder="Select an animal">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </NativeSelect>
        <Button data-slot="input-addon" variant="outline">
          Submit
        </Button>
      </>
    ),
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-4">
      <InputGroup {...args} />
    </div>
  ),
}
