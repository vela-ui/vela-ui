import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Form,
  Select,
  SelectItem,
  SelectList,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@vela-ui/react"

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Select className="w-[200px]" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectList>
          <SelectItem>Aardvark</SelectItem>
          <SelectItem>Cat</SelectItem>
          <SelectItem>Dog</SelectItem>
          <SelectItem>Kangaroo</SelectItem>
          <SelectItem>Panda</SelectItem>
          <SelectItem>Snake</SelectItem>
        </SelectList>
      </SelectPopover>
    </Select>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => (
    <Select className="w-[200px]" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectList>
          <SelectItem>Aardvark</SelectItem>
          <SelectItem>Cat</SelectItem>
          <SelectItem>Dog</SelectItem>
          <SelectItem>Kangaroo</SelectItem>
          <SelectItem>Panda</SelectItem>
          <SelectItem>Snake</SelectItem>
        </SelectList>
      </SelectPopover>
    </Select>
  ),
}

export const DisabledItems: Story = {
  args: {
    disabledKeys: ["dog", "panda"],
  },
  render: (args) => (
    <Select className="w-[200px]" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectList>
          <SelectItem>Aardvark</SelectItem>
          <SelectItem>Cat</SelectItem>
          <SelectItem id="dog">Dog</SelectItem>
          <SelectItem>Kangaroo</SelectItem>
          <SelectItem id="panda">Panda</SelectItem>
          <SelectItem>Snake</SelectItem>
        </SelectList>
      </SelectPopover>
    </Select>
  ),
}

export const Links: Story = {
  render: (args) => (
    <Select className="w-[200px]" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectList>
          <SelectItem href="https://adobe.com/" target="_blank">
            Adobe
          </SelectItem>
          <SelectItem href="https://apple.com/" target="_blank">
            Apple
          </SelectItem>
          <SelectItem href="https://google.com/" target="_blank">
            Google
          </SelectItem>
          <SelectItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </SelectItem>
        </SelectList>
      </SelectPopover>
    </Select>
  ),
}

export const Validation = () => (
  <Form className="flex flex-col gap-2">
    <Select isRequired className="w-[200px]" placeholder="Select an animal" label="Favorite Animal">
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectList>
          <SelectItem>Aardvark</SelectItem>
          <SelectItem>Cat</SelectItem>
          <SelectItem>Dog</SelectItem>
          <SelectItem>Kangaroo</SelectItem>
          <SelectItem>Panda</SelectItem>
          <SelectItem>Snake</SelectItem>
        </SelectList>
      </SelectPopover>
    </Select>
    <Button className="w-fit" type="submit">
      Submit
    </Button>
  </Form>
)
