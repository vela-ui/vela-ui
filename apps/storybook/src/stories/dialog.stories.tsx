import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  Input,
  Label,
  TextField,
  useDisclosure,
} from "@vela-ui/react"

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
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export const Default: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <DialogTrigger>
      <Button variant="outline">Open Dialog</Button>
      <Dialog {...args}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <Form className="grid gap-4">
            <TextField className="grid gap-3" isRequired autoFocus value="Pedro Duarte">
              <Label>Name</Label>
              <Input name="name" />
            </TextField>
            <TextField className="grid gap-3" value="@peduarte">
              <Label>Username</Label>
              <Input name="username" />
            </TextField>
          </Form>
          <DialogFooter>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close" onPress={() => console.log("xxx")}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DialogTrigger>
  ),
}

export const Blur: Story = {
  args: {
    placement: "top",
    size: "sm",
    isBlurred: true,
    role: "alertdialog",
  },
  render: (args) => (
    <DialogTrigger>
      <Button variant="outline">Open Dialog</Button>
      <Dialog {...args}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modal Title</DialogTitle>
          </DialogHeader>
          <div>{content}</div>
          <DialogFooter>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close" onPress={() => console.log("xxx")}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DialogTrigger>
  ),
}

export const Nested = () => {
  const state1 = useDisclosure()
  const state2 = useDisclosure()

  return (
    <>
      <Button variant="outline" onPress={state1.onOpen}>
        Open Dialog
      </Button>
      <Dialog isOpen={state1.isOpen} onOpenChange={state1.onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <div>{content}</div>
          <DialogFooter>
            <Button onPress={state2.onOpen}>Open Dialog</Button>
            <Button slot="close" variant="outline">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog size="sm" isOpen={state2.isOpen} onOpenChange={state2.onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Modal Title</DialogTitle>
          </DialogHeader>
          <div>{content}</div>
          <DialogFooter>
            <Button
              onPress={() => {
                state1.onClose()
                state2.onClose()
              }}
            >
              Close All
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export const OutsideScroll = () => {
  return (
    <DialogTrigger>
      <Button variant="outline">Open Dialog</Button>
      <Dialog placement="top">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogBody>
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index}>{content}</div>
            ))}
          </DialogBody>
          <DialogFooter>
            <Button slot="close">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DialogTrigger>
  )
}

export const InsideScroll = () => {
  return (
    <DialogTrigger>
      <Button variant="outline">Open Dialog</Button>
      <Dialog scrollBehavior="inside">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogBody>
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index}>{content}</div>
            ))}
          </DialogBody>
          <DialogFooter>
            <Button slot="close">Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DialogTrigger>
  )
}
