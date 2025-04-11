import type { Meta } from "@storybook/react"
import { Button, componentColors, Popover } from "../src"

const meta = {
  title: "Components/Popover",
  component: Popover,
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
    placement: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "right", "left"],
    },
    offset: {
      control: {
        type: "number",
      },
    },
    showArrow: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Popover>

export default meta

export const Default = (args: any) => (
  <Popover.Trigger>
    <Button>Open</Button>
    <Popover {...args}>
      <Popover.Content role="alertdialog">haha</Popover.Content>
    </Popover>
  </Popover.Trigger>
)
