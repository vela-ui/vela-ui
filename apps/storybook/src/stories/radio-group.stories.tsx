import type { Meta, StoryObj } from "@storybook/react"
import { Button, Label, Radio, RadioGroup } from "@vela-ui/react"
import { Form } from "react-aria-components"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
    isDisabled: false,
    isRequired: false,
    children: (
      <>
        <Label>Favorite sport</Label>
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

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} isDisabled>
      <Radio value="soccer">Soccer</Radio>
    </RadioGroup>
  ),
}
