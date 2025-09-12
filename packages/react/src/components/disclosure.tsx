"use client"

import { useContext } from "react"
import {
  Button as AriaButton,
  Disclosure as AriaDisclosure,
  DisclosureGroup as AriaDisclosureGroup,
  DisclosurePanel as AriaDisclosurePanel,
  Heading as AriaHeading,
  composeRenderProps,
  DisclosureGroupStateContext,
} from "react-aria-components"
import { tv } from "tailwind-variants"
import { ChevronDownIcon } from "../icons"

const disclosureVariants = tv({
  slots: {
    root: "group min-w-64",
    button: [
      "flex flex-1 items-center justify-between rounded-md py-4 text-sm font-medium transition-all outline-none hover:underline",
      "data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/50 data-[focus-visible]:ring-[3px]",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    panel: "",
    indicator:
      "text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200 group-data-[expanded]:rotate-180",
  },
  variants: {
    isInGroup: {
      true: {
        root: "border-0 border-b last:border-b-0",
      },
    },
  },
  defaultVariants: {},
})

const { root, button, panel, indicator } = disclosureVariants()

type DisclosureProps = React.ComponentProps<typeof AriaDisclosure>

function Disclosure({ children, className, ...props }: DisclosureProps) {
  const isInGroup = useContext(DisclosureGroupStateContext) !== null

  return (
    <AriaDisclosure
      data-slot="disclosure"
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        root({ ...renderProps, isInGroup, className }),
      )}
    >
      {children}
    </AriaDisclosure>
  )
}

type DisclosureHeaderProps = React.ComponentProps<typeof AriaButton>

function DisclosureHeader({ children, className, ...props }: DisclosureHeaderProps) {
  return (
    <AriaHeading className="flex">
      <AriaButton
        slot="trigger"
        {...props}
        className={composeRenderProps(className, (className, renderProps) =>
          button({ ...renderProps, className }),
        )}
      >
        {composeRenderProps(children, (children) => (
          <>
            {children}
            <ChevronDownIcon aria-hidden className={indicator()} />
          </>
        ))}
      </AriaButton>
    </AriaHeading>
  )
}

type DisclosurePanelProps = React.ComponentProps<typeof AriaDisclosurePanel>

function DisclosurePanel({ children, className, ...props }: DisclosurePanelProps) {
  return (
    <AriaDisclosurePanel
      data-slot="disclosure-panel"
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        panel({ ...renderProps, className }),
      )}
    >
      {children}
    </AriaDisclosurePanel>
  )
}

type DisclosureGroupProps = React.ComponentProps<typeof AriaDisclosureGroup>

function DisclosureGroup({ children, className, ...props }: DisclosureGroupProps) {
  return (
    <AriaDisclosureGroup
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        root({ ...renderProps, className }),
      )}
    >
      {children}
    </AriaDisclosureGroup>
  )
}

export { Disclosure, DisclosureGroup, DisclosureHeader, DisclosurePanel }
export type { DisclosureHeaderProps, DisclosurePanelProps, DisclosureProps }
