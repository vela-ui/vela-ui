import type { Meta, StoryObj } from "@storybook/react"
import { Link } from "@vela-ui/react"

const variants = ["hover", "underline", "none"] as const
const colors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-500",
  "text-lime-500",
  "text-green-500",
  "text-blue-500",
  "text-purple-500",
  "text-pink-500",
]

const meta = {
  title: "Components/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: variants,
    },
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: "https://tailwindcss.com",
    target: "_blank",
    children: "Tailwind CSS",
  },
}

export const Variant: Story = {
  args: {
    href: "https://tailwindcss.com",
    target: "_blank",
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      {variants.map((variant) => (
        <Link key={variant} {...args} variant={variant}>
          {variant}
        </Link>
      ))}
    </div>
  ),
}

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      {colors.map((color) => (
        <Link
          key={color}
          {...args}
          href="https://react-spectrum.adobe.com/react-aria/Link.html"
          target="_blank"
          className={color}
        >
          {color.split("-")[1].toUpperCase()}
        </Link>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Disabled",
  },
}
