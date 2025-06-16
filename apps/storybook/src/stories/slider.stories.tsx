import type { Meta, StoryObj } from "@storybook/react"
import {
  componentSizes,
  Label,
  Slider,
  SliderOutput,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@vela-ui/react"

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
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
    <div className="w-96">
      <Slider {...args}>
        <div className="flex items-center justify-between">
          <Label>Temperature</Label>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-6">
      <Slider {...args} size="sm">
        <div className="flex items-center justify-between">
          <Label>Size: sm</Label>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <Slider {...args} size="md">
        <div className="flex items-center justify-between">
          <Label>Size: md</Label>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <Slider {...args} size="lg">
        <div className="flex items-center justify-between">
          <Label>Size: lg</Label>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    minValue: 0,
    maxValue: 100,
    step: 1,
    defaultValue: [50],
  },
  render: (args) => (
    <div className="w-96">
      <Slider {...args}>
        <div className="flex items-center justify-between">
          <Label>Temperature</Label>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </div>
  ),
}
