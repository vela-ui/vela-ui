import type { Meta, StoryObj } from "@storybook/react"
import { componentColors, Link } from "../src"

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: componentColors,
    },
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Add &quot;link&quot; class to make it look like a <Link {...args}>normal link</Link> again.
    </p>
  ),
}

export const Colors: Story = {
  args: {},
  render: (args) => (
    <div className="flex items-center gap-2">
      {componentColors.map((color) => (
        <Link
          key={color}
          {...args}
          color={color}
          href="https://react-spectrum.adobe.com/react-aria/Link.html"
          target="_blank"
        >
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Link>
      ))}
    </div>
  ),
}

export const Underline: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Link {...args} underline="none">
        None
      </Link>
      <Link {...args} underline="hover">
        Hover
      </Link>
      <Link {...args}>Always</Link>
      <Link {...args} underline="active">
        Active
      </Link>
    </div>
  ),
}
