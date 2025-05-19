import type { Meta, StoryObj } from "@storybook/react"
import { Button, Label, Radio, RadioGroup } from "@vela-ui/react"
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
        <Radio value="soccer" size="xs">
          Soccer
        </Radio>
        <Radio value="baseball" size="sm">
          Baseball
        </Radio>
        <Radio value="football" size="md">
          Football
        </Radio>
        <Radio value="tennis" size="lg">
          Tennis
        </Radio>
        <Radio value="golf" size="xl">
          Golf
        </Radio>
      </RadioGroup>
    </div>
  ),
}

export const Colors: Story = {
  args: {
    orientation: "horizontal",
    defaultValue: "neutral",
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <RadioGroup {...args}>
        <Label>Choose your favorite color</Label>
        <Radio value="primary" color="primary">
          primary
        </Radio>
        <Radio value="secondary" color="secondary">
          secondary
        </Radio>
        <Radio value="accent" color="accent">
          accent
        </Radio>
        <Radio value="neutral" color="neutral">
          neutral
        </Radio>
        <Radio value="info" color="info">
          info
        </Radio>
        <Radio value="success" color="success">
          success
        </Radio>
        <Radio value="warning" color="warning">
          warning
        </Radio>
        <Radio value="error" color="error">
          error
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
    <Form className="flex flex-col items-start gap-2">
      <RadioGroup {...args} />
      <Button type="submit" color="primary">
        Submit
      </Button>
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
