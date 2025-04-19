import { Meta, StoryObj } from "@storybook/react"
import { Button, Drawer } from "@vela-ui/react"

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
  decorators: [
    (Story) => (
      <div className="flex h-screen w-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
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
    <Drawer.Trigger>
      <Button>Open Drawer</Button>
      <Drawer {...args}>
        <Drawer.Content role="alertdialog">
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Drawer.Body>
          <Drawer.Footer>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close" color="primary">
              Save
            </Button>
          </Drawer.Footer>
          <Drawer.CloseButton />
        </Drawer.Content>
      </Drawer>
    </Drawer.Trigger>
  ),
}

export const Placements: Story = {
  render: (args) => {
    const placements = ["top", "bottom", "start", "end"] as const

    return (
      <div className="flex items-center gap-4">
        {placements.map((placement) => (
          <div key={placement}>
            <Drawer.Trigger>
              <Button>Open ({placement})</Button>
              <Drawer {...args} placement={placement} className="[--drawer-offset:0.5rem]">
                <Drawer.Content role="alertdialog">
                  <Drawer.Header>
                    <Drawer.Title>Delete file</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>{content}</Drawer.Body>
                  <Drawer.Footer>
                    <Button slot="close" variant="outline">
                      Cancel
                    </Button>
                    <Button slot="close" color="primary" onPress={() => console.log("xxx")}>
                      Continue
                    </Button>
                  </Drawer.Footer>
                  <Drawer.CloseButton />
                </Drawer.Content>
              </Drawer>
            </Drawer.Trigger>
          </div>
        ))}
      </div>
    )
  },
}
