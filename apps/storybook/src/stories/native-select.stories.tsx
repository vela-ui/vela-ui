import { Meta, StoryObj } from "@storybook/react"
import { NativeSelect } from "@vela-ui/react"

const sizes = ["xs", "sm", "md", "lg"] as const

const options = ["Aardvark", "Cat", "Dog", "Kangaroo", "Panda", "Snake"]

const meta = {
  title: "Components/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof NativeSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NativeSelect className="w-[200px]" placeholder="Select an animal" {...args}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </NativeSelect>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <NativeSelect
          key={size}
          className="w-[200px]"
          placeholder="Select an animal"
          size={size}
          {...args}
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </NativeSelect>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <NativeSelect className="w-[200px]" placeholder="Select an animal" {...args}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </NativeSelect>
  ),
}

export const Validation: Story = {
  args: {
    required: true,
    "aria-invalid": true,
  },
  render: (args) => (
    <NativeSelect className="w-[200px]" placeholder="Select an animal" {...args}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </NativeSelect>
  ),
}
