import type { Meta, StoryObj } from "@storybook/react"
import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@vela-ui/react"
import { HeartIcon, StarIcon } from "lucide-react"

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card className="w-full min-w-sm" {...args}>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  ),
}

export function ProductCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">New</Badge>
          <Button variant="ghost" size="sm" shape="square">
            <HeartIcon className="size-4" />
          </Button>
        </div>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>High-quality product description</CardDescription>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="size-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-muted-foreground ml-2 text-sm">(4.8)</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-muted mb-4 aspect-square rounded-lg"></div>
        <p className="text-muted-foreground text-sm">Product features and benefits go here.</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <span className="text-2xl font-bold">$99.99</span>
          <span className="text-muted-foreground text-sm line-through">$129.99</span>
        </div>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export function CustomStyling() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100">
        <CardHeader>
          <CardTitle className="text-blue-900">Blue Theme</CardTitle>
          <CardDescription className="text-blue-700">A card with blue theming</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800">Content with blue theme styling.</p>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-100">
        <CardHeader>
          <CardTitle className="text-green-900">Green Theme</CardTitle>
          <CardDescription className="text-green-700">A card with green theming</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-800">Content with green theme styling.</p>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-violet-100">
        <CardHeader>
          <CardTitle className="text-purple-900">Purple Theme</CardTitle>
          <CardDescription className="text-purple-700">A card with purple theming</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-purple-800">Content with purple theme styling.</p>
        </CardContent>
      </Card>
    </div>
  )
}
