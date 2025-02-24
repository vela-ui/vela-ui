import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../src/components/button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg"],
    },
    rounded: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isPending: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button
        {...args}
        style={({ isPressed }) => (isPressed ? { color: "red" } : { color: "green" })}
        onPress={() => console.log("clicked")}
      >
        Default
      </Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="danger">
        Danger
      </Button>
    </div>
  ),
}

export const Variants: Story = {
  args: {
    color: "primary",
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} variant="solid">
        Solid
      </Button>
      <Button {...args} variant="outline" color="danger">
        Bordered
      </Button>
      <Button {...args} variant="plain">
        Light
      </Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="xs">
        Small
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
}

export const Radius: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button rounded="none">Rounded none</Button>
      <Button rounded="sm">Rounded sm</Button>
      <Button rounded="md">Rounded md</Button>
      <Button rounded="lg">Rounded lg</Button>
      <Button rounded="xl">Rounded xl</Button>
      <Button rounded="full">Rounded full</Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Button {...args}>Default</Button>
      <Button {...args} color="primary">
        Primary
      </Button>
      <Button {...args} color="secondary">
        Secondary
      </Button>
      <Button {...args} color="success">
        Success
      </Button>
      <Button {...args} color="warning">
        Warning
      </Button>
      <Button {...args} color="danger">
        Error
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  args: {
    color: "primary",
    isLoading: true,
  },
  render: (args) => (
    <>
      <div className="flex items-center gap-4">
        <Button {...args} size="lg">
          loading
        </Button>
        <Button {...args} size="md">
          loading
        </Button>
        <Button {...args} size="sm">
          loading
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Button {...args} color="primary">
          loading
        </Button>
        <Button {...args} color="secondary">
          loading
        </Button>
        <Button {...args} color="success">
          loading
        </Button>
        <Button {...args} color="warning">
          loading
        </Button>
        <Button {...args} color="danger">
          loading
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Button {...args} variant="solid">
          loading
        </Button>
        <Button {...args} variant="faded">
          loading
        </Button>
        <Button {...args} variant="bordered">
          loading
        </Button>
        <Button {...args} variant="light">
          loading
        </Button>
        <Button {...args} variant="flat">
          loading
        </Button>
        <Button {...args} variant="ghost">
          loading
        </Button>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <Button
          {...args}
          onPress={async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000))
          }}
        >
          Promise loading
        </Button>
      </div>
    </>
  ),
}

// export const WithIcons: Story = {
//   render: () => (
//     <div className="flex items-center gap-4">
//       <Button color="primary" startContent={<CheckCircleIcon className="h-5 w-5" />}>
//         Like
//       </Button>
//       <Button
//         color="danger"
//         variant="bordered"
//         startContent={<CheckCircleIcon className="h-5 w-5" />}
//       >
//         Send
//       </Button>
//       <Button size="sm" startContent={<InfoIcon className="h-4 w-4" />}>
//         Add
//       </Button>
//       <Button endContent={<InfoIcon className="h-5 w-5" />}>Like</Button>
//       <Button isIconOnly color="danger" aria-label="Like">
//         <ExclamationCircleFilledIcon className="h-5 w-5" />
//       </Button>
//       <Button isIconOnly color="secondary" variant="faded" aria-label="Play music">
//         <ExclamationCircleFilledIcon className="h-5 w-5" />
//       </Button>
//     </div>
//   ),
// }

export const CustomStyles: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Button
      </Button>
    </div>
  ),
}
