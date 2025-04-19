import type { Meta, StoryObj } from "@storybook/react"
import { Button, Radio, RadioGroup } from "@vela-ui/react"
import { Form } from "react-aria-components"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Favorite sport",
    isDisabled: false,
    isRequired: false,
    description: "",
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

export const Validation: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => (
    <Form className="flex flex-col items-start gap-2">
      <RadioGroup {...args} />
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  ),
}
