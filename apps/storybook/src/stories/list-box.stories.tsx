import { Meta, StoryObj } from "@storybook/react"
import { ListBox, ListBoxItem, ListBoxSection } from "@vela-ui/react"
import React from "react"
import type { Selection } from "react-aria-components"

const meta = {
  title: "Components/ListBox",
  component: ListBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ListBox>

export default meta

type Story = StoryObj<typeof meta>

const fruits = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Banana",
  },
  {
    id: 3,
    name: "Orange",
  },
  {
    id: 4,
    name: "Strawberry",
  },
  {
    id: 5,
    name: "Grapes",
  },
  {
    id: 6,
    name: "Mango",
  },
  {
    id: 7,
    name: "Pineapple",
  },
]

export const Default: Story = {
  render: (args) => (
    <ListBox {...args} aria-label="Favorite animal" selectionMode="single">
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  ),
}

export const Multiple = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set([3]))

  return (
    <ListBox
      selectedKeys={selected}
      onSelectionChange={setSelected}
      items={fruits}
      aria-label="Fruits"
      selectionMode="multiple"
    >
      {(fruit) => (
        <ListBoxItem id={fruit.id} textValue={fruit.name}>
          {fruit.name}
        </ListBoxItem>
      )}
    </ListBox>
  )
}

export const Sections: Story = {
  render: (args) => (
    <ListBox
      {...args}
      className="max-h-[200px]"
      aria-label="Sandwich contents"
      selectionMode="multiple"
    >
      <ListBoxSection title="Veggies">
        <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
        <ListBoxItem id="tomato">Tomato</ListBoxItem>
        <ListBoxItem id="onion">Onion</ListBoxItem>
      </ListBoxSection>
      <ListBoxSection title="Protein">
        <ListBoxItem id="ham">Ham</ListBoxItem>
        <ListBoxItem id="tuna">Tuna</ListBoxItem>
        <ListBoxItem id="tofu">Tofu</ListBoxItem>
      </ListBoxSection>
      <ListBoxSection title="Condiments">
        <ListBoxItem id="mayo">Mayonaise</ListBoxItem>
        <ListBoxItem id="mustard">Mustard</ListBoxItem>
        <ListBoxItem id="ranch">Ranch</ListBoxItem>
      </ListBoxSection>
    </ListBox>
  ),
}

export const DisabledItems: Story = {
  args: {
    disabledKeys: [3, 5, 7],
  },
  render: (args) => (
    <ListBox {...args} items={fruits} aria-label="Fruits" selectionMode="multiple">
      {(fruit) => (
        <ListBoxItem id={fruit.id} textValue={fruit.name}>
          {fruit.name}
        </ListBoxItem>
      )}
    </ListBox>
  ),
}
