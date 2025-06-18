import type { Meta, StoryObj } from "@storybook/react"
import { Button, Radio, RadioGroup, RadioGroupRoot } from "@vela-ui/react"
import { Form } from "react-aria-components"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: {
        type: "select",
      },
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    label: "Favorite sport",
    description: "Choose your favorite sport",
    children: (
      <>
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </>
    ),
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <RadioGroup {...args}>
        <Radio value="small" size="sm">
          Small
        </Radio>
        <Radio value="medium" size="md">
          Medium
        </Radio>
        <Radio value="large" size="lg">
          Large
        </Radio>
      </RadioGroup>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} isDisabled>
      <Radio value="soccer">Soccer</Radio>
    </RadioGroup>
  ),
}

export const Validation: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => (
    <Form className="flex flex-col items-start gap-4">
      <RadioGroup {...args} />
      <Button type="submit">Submit</Button>
    </Form>
  ),
}

export const Custom: Story = {
  args: {
    className: "gap-4",
    wrapperClassName: "gap-4",
    orientation: "horizontal",
  },
  render: (args) => (
    <RadioGroup
      aria-label="Custom"
      {...args}
      label="Favorite color"
      description="Choose your favorite color"
    >
      <Radio value="blue" size="lg" indicatorClassName="border-2 border-blue-500 text-blue-500">
        Blue
      </Radio>
      <Radio value="green" size="lg" indicatorClassName="border-2 border-green-500 text-green-500">
        Green
      </Radio>
      <Radio value="red" size="lg" indicatorClassName="border-2 border-red-500 text-red-500">
        Red
      </Radio>
    </RadioGroup>
  ),
}

export const RootComponent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">RadioGroupRoot</h3>
        <RadioGroupRoot aria-label="Favorite sport">
          <Radio value="soccer">Soccer</Radio>
          <Radio value="baseball">Baseball</Radio>
          <Radio value="basketball">Basketball</Radio>
        </RadioGroupRoot>
      </div>
    </div>
  ),
}
