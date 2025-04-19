import type { Meta, StoryObj } from "@storybook/react"
import { Button, Skeleton, SkeletonProps } from "@vela-ui/react"
import React from "react"

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["pulse", "shine"],
    },
    isLoaded: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "size-32",
    variant: "pulse",
  },
}

const LoadedStateTemplate = (args: SkeletonProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const toggleLoad = () => {
    setIsLoaded(!isLoaded)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Skeleton {...args} variant="shine" isLoaded={isLoaded}>
        <img src="https://i.pravatar.cc/150?img=5" className="rounded-box size-32" />
      </Skeleton>
      <Button className="w-36" color="primary" onPress={toggleLoad}>
        {isLoaded ? "Show" : "Hide"} Skeleton
      </Button>
    </div>
  )
}

export const Variant: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="mb-3 text-xl font-medium">Pulse</h3>
        <Skeleton {...args} variant="pulse" className="h-20 w-full" />
      </div>
      <div>
        <h3 className="mb-3 text-xl font-medium">Shine</h3>
        <Skeleton {...args} variant="shine" className="h-20 w-full" />
      </div>
    </div>
  ),
}

export const LoadedState: Story = {
  render: LoadedStateTemplate,
}

export const StartEndColor: Story = {
  render: (args) => (
    <Skeleton
      {...args}
      variant="shine"
      className="h-5 w-full [--end-color:var(--color-orange-500)] [--start-color:var(--color-pink-500)]"
    />
  ),
}
