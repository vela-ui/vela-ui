import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Dialog,
  DialogCloseIcon,
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

export const Default: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <DialogTrigger>
      <Button variant="outline">Open Dialog</Button>
      <Dialog {...args} placement="top">
        <DialogContent role="alertdialog">
          <Form>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <TextField className="grid gap-3" isRequired autoFocus value="Pedro Duarte">
                <Label>Name</Label>
                <Input name="name" />
              </TextField>
              <TextField className="grid gap-3" value="@peduarte">
                <Label>Username</Label>
                <Input name="username" />
              </TextField>
            </div>
            <DialogFooter>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button slot="close" onPress={() => console.log("xxx")}>
                Save changes
              </Button>
            </DialogFooter>
          </Form>
          <DialogCloseIcon />
        </DialogContent>
      </Dialog>
    </DialogTrigger>
  ),
}
