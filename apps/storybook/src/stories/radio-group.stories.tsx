import type { Meta, StoryObj } from "@storybook/react"
import { Button, Radio, RadioGroup, RadioGroupRoot, Separator } from "@vela-ui/react"
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

export const Variants: Story = {
  args: {
    label: "Frameworks",
    description: "",
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <RadioGroup {...args} defaultValue="react">
        <Radio value="react">React</Radio>
        <Radio value="vue">Vue</Radio>
      </RadioGroup>
      <Separator />
      <RadioGroup {...args} defaultValue="react">
        <Radio value="react" variant="outline">
          React
        </Radio>
        <Radio value="vue" variant="outline">
          Vue
        </Radio>
      </RadioGroup>
    </div>
  ),
}

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

export const CustomColor: Story = {
  args: {
    className: "gap-4",
    wrapperClassName: "gap-4",
    orientation: "horizontal",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <RadioGroup aria-label="Custom" {...args} label="Default" description="" defaultValue="blue">
        <Radio
          value="blue"
          size="lg"
          indicatorClassName=" border-2 group-data-[selected=true]:bg-blue-500"
        >
          Blue
        </Radio>
        <Radio
          value="green"
          size="lg"
          indicatorClassName=" border-2 group-data-[selected=true]:bg-green-500"
        >
          Green
        </Radio>
        <Radio
          value="red"
          size="lg"
          indicatorClassName="border-2 group-data-[selected=true]:bg-red-500"
        >
          Red
        </Radio>
      </RadioGroup>
      <RadioGroup aria-label="Custom" {...args} label="Outline" description="" defaultValue="blue">
        <Radio
          variant="outline"
          value="blue"
          size="lg"
          indicatorClassName="border-2 text-blue-500 group-data-[selected=true]:border-blue-500"
        >
          Blue
        </Radio>
        <Radio
          variant="outline"
          value="green"
          size="lg"
          indicatorClassName="border-2 text-green-500 group-data-[selected=true]:border-green-500"
        >
          Green
        </Radio>
        <Radio
          variant="outline"
          value="red"
          size="lg"
          indicatorClassName="border-2 text-red-500 group-data-[selected=true]:border-red-500"
        >
          Red
        </Radio>
      </RadioGroup>
    </div>
  ),
}

export const RootComponent: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-medium">RadioGroupRoot</h3>
        <p className="text-muted-foreground text-sm">
          Does not contain label, description, or error message
        </p>
      </div>
      <RadioGroupRoot aria-label="Favorite sport">
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </RadioGroupRoot>
    </div>
  ),
}
