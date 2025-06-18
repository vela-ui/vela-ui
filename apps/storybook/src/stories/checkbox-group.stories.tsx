import type { Meta, StoryObj } from "@storybook/react"
import { Button, Checkbox, CheckboxGroup, CheckboxGroupRoot, Form } from "@vela-ui/react"

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    isDisabled: false,
    isRequired: false,
    label: "Cities",
    description: "Select your favorite cities",
    children: (
      <>
        <Checkbox value="sf">San Francisco</Checkbox>
        <Checkbox value="ny">New York</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </>
    ),
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const Validation: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => (
    <Form className="flex flex-col items-start gap-4">
      <CheckboxGroup {...args} />
      <Button type="submit">Submit</Button>
    </Form>
  ),
}

export const Custom: Story = {
  args: {
    className: "gap-4",
  },
  render: (args) => (
    <CheckboxGroup
      aria-label="Custom"
      {...args}
      label="Favorite color"
      description="Choose your favorite color"
    >
      <div className="flex gap-4">
        <Checkbox
          value="blue"
          size="lg"
          indicatorClassName="group-data-[selected=true]:bg-blue-500 group-data-[selected=true]:border-none"
        >
          Blue
        </Checkbox>
        <Checkbox
          value="green"
          size="lg"
          indicatorClassName="group-data-[selected=true]:bg-green-500 group-data-[selected=true]:border-none"
        >
          Green
        </Checkbox>
        <Checkbox
          value="red"
          size="lg"
          indicatorClassName="group-data-[selected=true]:bg-red-500 group-data-[selected=true]:border-none"
        >
          Red
        </Checkbox>
      </div>
    </CheckboxGroup>
  ),
}

export const RootComponent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">RadioGroupRoot</h3>
        <CheckboxGroupRoot aria-label="Favorite sport">
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroupRoot>
      </div>
    </div>
  ),
}
