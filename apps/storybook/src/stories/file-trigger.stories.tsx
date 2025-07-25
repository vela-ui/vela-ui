import type { Meta, StoryObj } from "@storybook/react"
import { Button, FileTrigger } from "@vela-ui/react"
import { UploadIcon } from "lucide-react"

const meta = {
  title: "Components/FileTrigger",
  component: FileTrigger,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof FileTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <FileTrigger {...args}>
      <Button variant="outline">
        <UploadIcon />
        Upload
      </Button>
    </FileTrigger>
  ),
}
