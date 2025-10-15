"use client"

import type { TabListProps as AriaTabListProps } from "react-aria-components"
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { createContext } from "../lib/context"

const tabsVariants = tv({
  slots: {
    root: "group/tabs",
    list: "relative isolate inline-flex",
    tab: "text-foreground/75 group relative inline-flex cursor-pointer items-center justify-center gap-2 px-3 py-1 whitespace-nowrap [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    panel: "",
  },
  variants: {
    variant: {
      default: {
        list: "bg-muted text-muted-foreground rounded-lg p-1",
        tab: "dark:text-muted-foreground data-[selected=true]:bg-background data-[selected=true]:dark:text-foreground data-[selected=true]:dark:border-input data-[selected=true]:dark:bg-input/30 rounded-md border border-transparent whitespace-nowrap transition-[color,box-shadow] data-[selected=true]:shadow-sm",
      },
      underline: {
        list: "border-input flex",
        tab: "data-[selected=true]:border-foreground data-[selected=true]:text-foreground border-transparent",
      },
      pills: {
        tab: "data-[selected=true]:bg-muted data-[selected=true]:text-foreground rounded-md",
      },
    },
    size: {
      sm: {
        tab: "h-9 text-sm",
      },
      md: {
        tab: "h-10 text-sm",
      },
      lg: {
        tab: "h-11 text-base",
      },
    },
    orientation: {
      horizontal: {
        root: "block",
        list: "flex-row overflow-x-auto overflow-y-hidden",
        panel: "w-full pt-4",
      },
      vertical: {
        root: "flex",
        list: "flex-col overflow-x-hidden overflow-y-auto",
        panel: "ps-4",
      },
    },
    fitted: {
      true: {
        list: "flex",
        tab: "flex-1 justify-center text-center",
      },
    },
    isDisabled: {
      true: {
        tab: "cursor-not-allowed opacity-50",
      },
    },
    isFocusVisible: {
      true: {
        tab: "border-ring ring-ring/50 outline-ring ring-[3px] outline-1",
        panel: "border-ring ring-ring/50 outline-ring ring-[3px] outline-1",
      },
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "underline",
      className: {
        list: "border-b",
        tab: "border-b-2",
      },
    },
    {
      orientation: "vertical",
      variant: "underline",
      className: {
        list: "border-r",
        tab: "border-r-2",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

const { root, list, tab, panel } = tabsVariants()

const [TabsProvider, useTabsContext] = createContext<VariantProps<typeof tabsVariants>>({
  name: "TabsContext",
})

type TabsProps = React.ComponentProps<typeof AriaTabs> & VariantProps<typeof tabsVariants>
function Tabs({
  className,
  variant = "default",
  size = "md",
  fitted = false,
  children,
  ...props
}: TabsProps) {
  return (
    <AriaTabs
      data-slot="tabs"
      className={composeRenderProps(className, (className, { orientation }) =>
        root({ orientation, className }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { orientation }) => (
        <TabsProvider value={{ orientation, variant, size, fitted }}>{children}</TabsProvider>
      ))}
    </AriaTabs>
  )
}

type TabListProps<T> = AriaTabListProps<T>
function TabList<T extends object>({ className, ...props }: TabListProps<T>) {
  const { orientation, variant, fitted } = useTabsContext()
  return (
    <AriaTabList
      data-slot="tab-list"
      className={composeRenderProps(className, (className) =>
        list({ orientation, variant, fitted, className }),
      )}
      {...props}
    />
  )
}

type TabProps = React.ComponentProps<typeof AriaTab>
function Tab({ className, ...props }: TabProps) {
  const { orientation, variant, size, fitted } = useTabsContext()
  return (
    <AriaTab
      data-slot="tab"
      className={composeRenderProps(className, (className, renderProps) =>
        tab({
          ...renderProps,
          orientation,
          variant,
          size,
          fitted,
          className,
        }),
      )}
      {...props}
    />
  )
}

type TabPanelProps = React.ComponentProps<typeof AriaTabPanel>
function TabPanel({ className, ...props }: TabPanelProps) {
  const { orientation, variant, size } = useTabsContext()
  return (
    <AriaTabPanel
      data-slot="tab-panel"
      className={composeRenderProps(className, (className, renderProps) =>
        panel({ ...renderProps, orientation, variant, size, className }),
      )}
      {...props}
    />
  )
}

export { Tab, TabList, TabPanel, Tabs }
export type { TabListProps, TabPanelProps, TabProps, TabsProps }
