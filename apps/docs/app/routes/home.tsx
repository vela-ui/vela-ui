import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex gap-3" data-theme="cupcake">
        <button className="vela-btn vela-btn-primary" data-theme="acid">
          Default
        </button>
        <button className="vela-btn vela-btn-primary">Primary</button>
        <button className="vela-btn vela-btn-secondary">Secondary</button>
        <button className="vela-btn vela-btn-accent">Accent</button>
        <button className="vela-btn vela-btn-info">Info</button>
        <button className="vela-btn vela-btn-success">Success</button>
        <button className="vela-btn vela-btn-warning">Warning</button>
        <button className="vela-btn vela-btn-error">Error</button>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-soft">Default</button>
        <button className="btn btn-soft btn-primary">Primary</button>
        <button className="btn btn-soft btn-secondary">Secondary</button>
        <button className="btn btn-soft btn-accent">Accent</button>
        <button className="btn btn-soft btn-info">Info</button>
        <button className="btn btn-soft btn-success">Success</button>
        <button className="btn btn-soft btn-warning">Warning</button>
        <button className="btn btn-soft btn-error">Error</button>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-outline">Default</button>
        <button className="btn btn-outline btn-primary">Primary</button>
        <button className="btn btn-outline btn-secondary">Secondary</button>
        <button className="btn btn-outline btn-accent">Accent</button>
        <button className="btn btn-outline btn-info">Info</button>
        <button className="btn btn-outline btn-success">Success</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        <button className="btn btn-outline btn-error">Error</button>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-dash">Default</button>
        <button className="btn btn-dash btn-primary">Primary</button>
        <button className="btn btn-dash btn-secondary">Secondary</button>
        <button className="btn btn-dash btn-accent">Accent</button>
        <button className="btn btn-dash btn-info">Info</button>
        <button className="btn btn-dash btn-success">Success</button>
        <button className="btn btn-dash btn-warning">Warning</button>
        <button className="btn btn-dash btn-error">Error</button>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-xs">Xsmall</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn">Medium</button>
        <button className="btn btn-lg">Large</button>
        <button className="btn btn-xl">Xlarge</button>
      </div>
    </div>
  )
}
