import type { Meta, StoryObj } from "@storybook/react"
import {
  Button,
  Menu,
  MenuItem,
  MenuLabel,
  MenuPopover,
  MenuProps,
  MenuSection,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
  SubmenuTrigger,
} from "@vela-ui/react"
import { ClipboardPaste, CopyIcon, LogOutIcon, ScissorsIcon } from "lucide-react"
import React from "react"
import type { Selection } from "react-aria-components"

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem id="new-text">New Text File</MenuItem>
          <MenuItem id="new-file">New File...</MenuItem>
          <MenuItem id="new-win">New Window</MenuItem>
          <MenuItem id="open-file">Open File...</MenuItem>
          <MenuItem id="close-win" variant="destructive">
            Close Window
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const DisabledItems: Story = {
  args: {
    disabledKeys: ["new-win", "open-file", "close-win"],
  },
  render: (args) => (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem id="new-text">New Text File</MenuItem>
          <MenuItem id="new-file">New File...</MenuItem>
          <MenuItem id="new-win">New Window</MenuItem>
          <MenuItem id="open-file">Open File...</MenuItem>
          <MenuItem id="close-win" variant="destructive">
            Close Window
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const Sections: Story = {
  args: {
    className: "w-32",
  },
  render: (args) => (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuSection title="Styles">
            <MenuItem id="bold">Bold</MenuItem>
            <MenuItem id="underline">Underline</MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection title="Align">
            <MenuItem id="left">Left</MenuItem>
            <MenuItem id="middle">Middle</MenuItem>
            <MenuItem id="right">Right</MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection title="Font">
            <MenuItem id="serif">Serif</MenuItem>
            <MenuItem id="sans-serif">Sans Serif</MenuItem>
            <MenuItem id="monospace">Monospace</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const Submenu: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem id="new-text">New Text File</MenuItem>
          <MenuItem id="new-file">New File...</MenuItem>
          <MenuItem id="new-win">New Window</MenuItem>
          <SubmenuTrigger>
            <MenuItem id="open-recent">Open Recent</MenuItem>
            <MenuPopover>
              <Menu>
                <MenuItem id="react-project">React Project</MenuItem>
                <MenuItem id="next-project">Next.js Project</MenuItem>
                <MenuItem id="svelte-project">Svelte Project</MenuItem>
                <SubmenuTrigger>
                  <MenuItem>More</MenuItem>
                  <MenuPopover>
                    <Menu>
                      <MenuItem id="vue-project">Vue Project</MenuItem>
                      <MenuItem id="angular-project">Angular Project</MenuItem>
                    </Menu>
                  </MenuPopover>
                </SubmenuTrigger>
              </Menu>
            </MenuPopover>
          </SubmenuTrigger>
          <MenuItem id="export">Export</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const Single = (args: MenuProps<object>) => {
  const [selected, setSelected] = React.useState<Selection>(new Set(["center"]))

  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu
          {...args}
          className="w-56"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Panel Position">
            <MenuSeparator />
            <MenuItem id="left">Left</MenuItem>
            <MenuItem id="center">Center</MenuItem>
            <MenuItem id="right">Right</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}

export const Multiple = (args: MenuProps<object>) => {
  const [selected, setSelected] = React.useState<Selection>(new Set(["autosave"]))

  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu
          {...args}
          className="w-56"
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuSection title="Features">
            <MenuSeparator />
            <MenuItem id="autosave">Autosave</MenuItem>
            <MenuItem id="detect-language" isDisabled>
              Detect Language
            </MenuItem>
            <MenuItem id="spellcheck">Spellcheck</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}

export const Links: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu {...args}>
          <MenuItem href="https://adobe.com/" target="_blank">
            Adobe
          </MenuItem>
          <MenuItem href="https://apple.com/" target="_blank">
            Apple
          </MenuItem>
          <MenuItem href="https://google.com/" target="_blank">
            Google
          </MenuItem>
          <MenuItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const IconAndCommand: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button variant="outline">Edit</Button>
      <MenuPopover>
        <Menu {...args} className="w-44">
          <MenuItem textValue="Cut">
            <ScissorsIcon />
            <MenuLabel>Cut</MenuLabel>
            <MenuShortcut>⌘X</MenuShortcut>
          </MenuItem>
          <MenuItem textValue="Copy">
            <CopyIcon />
            <MenuLabel>Copy</MenuLabel>
            <MenuShortcut>⌘C</MenuShortcut>
          </MenuItem>
          <MenuItem textValue="Paste">
            <ClipboardPaste />
            <MenuLabel>Paste</MenuLabel>
            <MenuShortcut>⌘V</MenuShortcut>
          </MenuItem>
          <MenuItem textValue="Logout" variant="destructive">
            <LogOutIcon />
            <MenuLabel>Logout</MenuLabel>
            <MenuShortcut>⌘ ⇧ Q</MenuShortcut>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  ),
}

export const Dynamic = (args: MenuProps<object>) => {
  const items = [
    { id: 1, name: "New" },
    { id: 2, name: "Open" },
    { id: 3, name: "Close" },
    { id: 4, name: "Save" },
    { id: 5, name: "Duplicate" },
    { id: 6, name: "Rename" },
    { id: 7, name: "Move" },
  ]

  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu {...args} items={items}>
          {(item) => <MenuItem>{item.name}</MenuItem>}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
