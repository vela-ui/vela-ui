import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Drawer,
  DrawerCloseIcon,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@vela-ui/react"

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    placement: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "start", "end"],
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof meta>

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
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
            hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.`

export const Default: Story = {
  render: (args) => (
    <DrawerTrigger>
      <Button variant="outline">Open Drawer</Button>
      <Drawer {...args}>
        <DrawerContent role="alertdialog">
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
          <DrawerFooter>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close">Save</Button>
          </DrawerFooter>
          <DrawerCloseIcon />
        </DrawerContent>
      </Drawer>
    </DrawerTrigger>
  ),
}

export const Placements: Story = {
  render: (args) => {
    const placements = ["top", "bottom", "left", "right"] as const

    return (
      <div className="flex items-center gap-4">
        {placements.map((placement) => (
          <div key={placement}>
            <DrawerTrigger>
              <Button>Open ({placement})</Button>
              <Drawer {...args} placement={placement} className="[--drawer-offset:0.5rem]">
                <DrawerContent role="alertdialog">
                  <DrawerHeader>
                    <DrawerTitle>Delete file</DrawerTitle>
                  </DrawerHeader>
                  <div>{content}</div>
                  <DrawerFooter>
                    <Button slot="close" variant="outline">
                      Cancel
                    </Button>
                    <Button slot="close" onPress={() => console.log("xxx")}>
                      Continue
                    </Button>
                  </DrawerFooter>
                  <DrawerCloseIcon />
                </DrawerContent>
              </Drawer>
            </DrawerTrigger>
          </div>
        ))}
      </div>
    )
  },
}
