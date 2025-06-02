import type { Meta, StoryObj } from "@storybook/react"
import { Button, Skeleton, SkeletonProps } from "@vela-ui/react"
import React from "react"

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
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
  },
}

const LoadedStateTemplate = (args: SkeletonProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const toggleLoad = () => {
    setIsLoaded(!isLoaded)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <Skeleton {...args} isLoaded={isLoaded}>
        <img src="https://i.pravatar.cc/150?img=5" className="rounded-box size-32" />
      </Skeleton>
      <Button className="w-36" onPress={toggleLoad}>
        {isLoaded ? "Show" : "Hide"} Skeleton
      </Button>
    </div>
  )
}

export const LoadedState: Story = {
  render: LoadedStateTemplate,
}
