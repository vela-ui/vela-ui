import { Meta, StoryObj } from "@storybook/react"
import { Loader, LoaderProps, componentColors, componentSizes } from "../src"

const variants = ["spinner", "dots", "ring", "ball", "bars", "infinity"] as const

const meta = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: variants,
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
  },
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

const LoaderTemplate = (args: LoaderProps) => (
  <div className="flex items-center gap-2">
    {componentSizes.map((size) => (
      <Loader key={size} size={size} {...args} />
    ))}
  </div>
)

export const Sizes: Story = {
  args: {
    color: "primary",
    variant: "spinner",
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      {componentSizes.map((size) => (
        <Loader key={size} {...args} size={size} />
      ))}
    </div>
  ),
}

export const Variants: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <div key={variant}>
          <h3 className="mb-3 text-xl font-medium">Loading {variant}</h3>
          <LoaderTemplate {...args} variant={variant} />
        </div>
      ))}
    </div>
  ),
}

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      {componentColors.map((color) => (
        <Loader key={color} {...args} color={color} />
      ))}
    </div>
  ),
}
