import type { Meta, StoryObj } from "@storybook/react"
import { Tab, TabList, TabPanel, Tabs } from "@vela-ui/react"
import { FolderIcon, SettingsIcon, UserIcon } from "lucide-react"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "underline", "pills"],
    },
    orientation: {
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    fitted: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

type Item = {
  id: string
  label: string
  content?: React.ReactNode
  icon?: React.ReactNode
}

const tabs: Item[] = [
  {
    id: "Members",
    icon: <UserIcon />,
    label: "Members",
    content: "Manage your team members",
  },
  {
    id: "Projects",
    icon: <FolderIcon />,
    label: "Projects",
    content: "Manage your projects ",
  },
  {
    id: "Settings",
    icon: <SettingsIcon />,
    label: "Settings",
    content: "Manage your tasks for freelancers",
  },
]

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <div className="w-96">
      <Tabs {...args}>
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
        {tabs.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {item.content}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-8">
      <Tabs {...args} variant="underline">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs {...args} variant="default">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs {...args} variant="pills">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-8">
      <Tabs {...args} variant="underline">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
        {tabs.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {item.content}
          </TabPanel>
        ))}
      </Tabs>
      <Tabs {...args}>
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
        {tabs.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {item.content}
          </TabPanel>
        ))}
      </Tabs>
      <Tabs {...args} variant="pills">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
        {tabs.map((item) => (
          <TabPanel key={item.id} id={item.id}>
            {item.content}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-8">
      <Tabs {...args} variant="underline">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id} isDisabled={item.id === "Projects"}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs {...args} variant="default">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id} isDisabled={item.id === "Projects"}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs {...args} variant="pills">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id} isDisabled={item.id === "Projects"}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  ),
}

export const Fitted: Story = {
  args: {
    fitted: true,
  },
  render: (args) => (
    <div className="flex w-96 flex-col gap-8">
      <Tabs {...args} variant="underline">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs {...args} variant="default">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs {...args} variant="pills">
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  ),
}

export const Custom: Story = {
  render: (args) => (
    <div className="flex w-96 flex-col gap-8">
      <Tabs
        {...args}
        variant="underline"
        className="**:data-[slot=tab]:data-[selected=true]:border-blue-600"
      >
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs
        {...args}
        variant="default"
        className="**:data-[slot=tab]:data-[selected=true]:text-blue-600"
      >
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Tabs
        {...args}
        variant="pills"
        className="**:data-[slot=tab]:data-[selected=true]:bg-blue-600 **:data-[slot=tab]:data-[selected=true]:text-white"
      >
        <TabList aria-label="Tabs example">
          {tabs.map((item) => (
            <Tab key={item.id} id={item.id}>
              {item.icon}
              {item.label}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  ),
}
