import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Form,
  Select,
  SelectItem,
  SelectList,
  SelectPopover,
  SelectProps,
  SelectSection,
  SelectTrigger,
  SelectValue,
} from "@vela-ui/react"

const sizes = ["xs", "sm", "md", "lg"] as const

const options = [
  {
    name: "Fruit",
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Orange" }, { name: "Grapes" }],
  },
  {
    name: "Vegetable",
    children: [{ name: "Cabbage" }, { name: "Broccoli" }, { name: "Carrots" }],
  },
]

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

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Select
          key={size}
          className="w-[200px]"
          placeholder="Select an animal"
          label={`Size = ${size}`}
          {...args}
        >
          <SelectTrigger size={size}>
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
      ))}
    </div>
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

export const Dynamic = (args: SelectProps<object>) => {
  return (
    <Select className="w-[200px]" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectList items={options}>
          {(section) => (
            <SelectSection id={section.name} title={section.name} items={section.children}>
              {(item) => <SelectItem id={item.name}>{item.name}</SelectItem>}
            </SelectSection>
          )}
        </SelectList>
      </SelectPopover>
    </Select>
  )
}
