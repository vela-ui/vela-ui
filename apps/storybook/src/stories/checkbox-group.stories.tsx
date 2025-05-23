import type { Meta, StoryObj } from "@storybook/react"
import { Button, Checkbox, CheckboxGroup, CheckboxGroupProps, Label } from "@vela-ui/react"
import { Form } from "react-aria-components"

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isDisabled: false,
    isRequired: false,
    children: (
      <>
        <Label>Cities</Label>
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

export const Default: Story = {
  args: {},
}

export const Validation: Story = (args: CheckboxGroupProps) => (
  <Form className="flex flex-col items-start gap-2">
    <CheckboxGroup {...args} />
    <Button type="submit" color="primary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
