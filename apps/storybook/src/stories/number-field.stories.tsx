import type { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Form,
  Input,
  InputGroup,
  Label,
  NumberField,
  NumberFieldRoot,
} from "@vela-ui/react"
import { MinusIcon, PlusIcon } from "lucide-react"

const sizes = ["xs", "sm", "md", "lg", "xl"] as const

const meta = {
  title: "Components/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: sizes,
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof NumberField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NumberField {...args} label="Enter Number" description="Enter a number between 1 and 10" />
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-4">
      {sizes.map((size) => (
        <NumberField key={size} {...args} size={size} placeholder={`Size (${size})`} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: 10,
    isDisabled: true,
  },
  render: (args) => <NumberField label="Disabled" {...args} />,
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 10,
    isReadOnly: true,
  },
  render: (args) => <NumberField label="ReadOnly" {...args} />,
}

export const Validation: Story = {
  render: (args) => (
    <Form className="flex flex-col gap-4">
      <NumberField label="Enter Number" name="number" isRequired {...args} />
      <Button type="submit">Submit</Button>
    </Form>
  ),
}

export const Custom: Story = {
  args: {
    defaultValue: 1000,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <NumberFieldRoot {...args}>
        <Label>Custom</Label>
        <InputGroup>
          <Button data-slot="input-addon" variant="outline" shape="square" slot="decrement">
            <MinusIcon />
          </Button>
          <Input className="w-24 text-center" />
          <Button data-slot="input-addon" variant="outline" shape="square" slot="increment">
            <PlusIcon />
          </Button>
        </InputGroup>
      </NumberFieldRoot>
      <NumberFieldRoot {...args}>
        <Label>Custom</Label>
        <InputGroup className="gap-2">
          <Button variant="outline" shape="circle" slot="decrement">
            <MinusIcon />
          </Button>
          <Input className="w-24 text-center" />
          <Button variant="outline" shape="circle" slot="increment">
            <PlusIcon />
          </Button>
        </InputGroup>
      </NumberFieldRoot>
    </div>
  ),
}
