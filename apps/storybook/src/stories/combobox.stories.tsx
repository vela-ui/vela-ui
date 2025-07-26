import { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopover,
  ComboboxSection,
  Form,
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

const items = ["Aardvark", "Cat", "Dog", "Kangaroo", "Panda", "Snake"]

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Combobox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Combobox className="w-64" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList>
          {items.map((item) => (
            <ComboboxItem key={item}>{item}</ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Combobox
          key={size}
          className="w-64"
          placeholder="Select an animal"
          label={`Size = ${size}`}
          {...args}
        >
          <ComboboxInput size={size} />
          <ComboboxPopover>
            <ComboboxList>
              {items.map((item) => (
                <ComboboxItem key={item}>{item}</ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => (
    <Combobox className="w-64" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList>
          {items.map((item) => (
            <ComboboxItem key={item}>{item}</ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  ),
}

export const DisabledItems: Story = {
  args: {
    disabledKeys: ["dog", "panda"],
  },
  render: (args) => (
    <Combobox className="w-64" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxItem>Aardvark</ComboboxItem>
          <ComboboxItem>Cat</ComboboxItem>
          <ComboboxItem id="dog">Dog</ComboboxItem>
          <ComboboxItem>Kangaroo</ComboboxItem>
          <ComboboxItem id="panda">Panda</ComboboxItem>
          <ComboboxItem>Snake</ComboboxItem>
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  ),
}

export const Validation: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => (
    <Form className="flex flex-col gap-2">
      <Combobox className="w-64" placeholder="Select an animal" label="Favorite Animal" {...args}>
        <ComboboxInput />
        <ComboboxPopover>
          <ComboboxList>
            {items.map((item) => (
              <ComboboxItem key={item}>{item}</ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  ),
}

export const Dynamic: Story = {
  render: (args) => (
    <Combobox className="w-64" placeholder="Select an animal" label="Favorite Animal" {...args}>
      <ComboboxInput />
      <ComboboxPopover>
        <ComboboxList items={options}>
          {(section) => (
            <ComboboxSection id={section.name} title={section.name} items={section.children}>
              {(item) => <ComboboxItem id={item.name}>{item.name}</ComboboxItem>}
            </ComboboxSection>
          )}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  ),
}
