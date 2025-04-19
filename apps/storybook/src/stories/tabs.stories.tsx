import type { Meta, StoryObj } from "@storybook/react"
import { Tabs, TabsProps } from "@vela-ui/react"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

type Item = {
  id: string
  label: string
  content?: React.ReactNode
}

const tabs: Item[] = [
  {
    id: "world",
    label: "World",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "ny",
    label: "N.Y.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id libero rutrum aliquam. Sed eget nunc vitae nisl aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet. Sed eget nunc vitae nisl aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet. Sed eget nunc vitae nisl aliquam aliquet. ",
  },
  {
    id: "business",
    label: "Business",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id libero rutrum aliquam. Sed eget nunc vitae nisl aliquam aliquet.",
  },
  {
    id: "arts",
    label: "Arts",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id libero rutrum aliquam. Sed eget nunc vitae nisl aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet. Sed eget nunc vitae nisl aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet. Sed eget nunc vitae nisl aliquam aliquet. ",
  },
  {
    id: "science",
    label: "Science",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam id libero rutrum aliquam. Sed eget nunc vitae nisl aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet. Sed eget nunc vitae nisl aliquam aliquet. Sed vitae nisl eget nunc aliquam aliquet. Sed eget nunc vitae nisl aliquam aliquet. ",
  },
]

const StaticTemplate = (args: TabsProps) => (
  <Tabs {...args}>
    <Tabs.List aria-label="Tabs example" variant="border">
      {tabs.map((item) => (
        <Tabs.Tab key={item.id} id={item.id}>
          {item.label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
    {tabs.map((item) => (
      <Tabs.Panel key={item.id} id={item.id}>
        {item.content}
      </Tabs.Panel>
    ))}
  </Tabs>
)

export const Default: Story = {
  render: StaticTemplate,
}
