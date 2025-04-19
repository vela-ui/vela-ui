import { Meta, StoryObj } from "@storybook/react"
import { Button, Dialog } from "@vela-ui/react"

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"],
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen w-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

const Template = () => {
  return (
    <Dialog.Trigger>
      <Button>Delete</Button>
      <Dialog placement="bottom">
        <Dialog.Content role="alertdialog">
          <Dialog.Header>
            <Dialog.Title>Delete file</Dialog.Title>
          </Dialog.Header>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </div>
          <Dialog.Footer>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close" color="primary" onPress={() => console.log("xxx")}>
              Continue
            </Button>
          </Dialog.Footer>
          <Dialog.CloseButton />
        </Dialog.Content>
      </Dialog>
    </Dialog.Trigger>
  )
}

export const Default: Story = {
  render: Template,
}
