import type { Meta, StoryObj } from "@storybook/react"
import { CloseIcon, componentColors, componentSizes, SuccessIcon, Switch } from "@vela-ui/react"

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: componentColors,
    },
    size: {
      control: {
        type: "select",
      },
      options: componentSizes,
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Wi-Fi",
    thumbIcon: (props) => (props.isSelected ? <SuccessIcon /> : <CloseIcon />),
  },
}
