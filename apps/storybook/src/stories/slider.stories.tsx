import type { Meta, StoryObj } from "@storybook/react"
import { componentColors, componentSizes, Label, Slider } from "@vela-ui/react"

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
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
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    minValue: 0,
    maxValue: 100,
    step: 1,
    defaultValue: [50],
  },
  render: (args) => (
    <Slider {...args}>
      <div className="flex items-center justify-between">
        <Label>Temperature</Label>
        <Slider.Output />
      </div>
      <Slider.Track>
        <Slider.Filler />
        <Slider.Thumb />
      </Slider.Track>
    </Slider>
  ),
}
