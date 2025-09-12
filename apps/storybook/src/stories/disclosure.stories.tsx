import type { Meta, StoryObj } from "@storybook/react"
import { Disclosure, DisclosureHeader, DisclosurePanel } from "@vela-ui/react"

const meta = {
  title: "Components/Disclosure",
  component: Disclosure,
  argTypes: {},
} satisfies Meta<typeof Disclosure>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Disclosure {...args} className="w-80">
      <DisclosureHeader>Apples</DisclosureHeader>
      <DisclosurePanel>
        Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits.
        They come in a variety of flavors and are great for snacking, baking, or adding to salads.
      </DisclosurePanel>
    </Disclosure>
  ),
}
