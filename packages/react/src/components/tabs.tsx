"use client"

import { cloneElement, isValidElement, ReactElement, ReactNode } from "react"
import type {
  TabListProps as AriaTabListProps,
  TabProps as AriaTabProps,
  TabPanelProps,
  TabsProps,
} from "react-aria-components"
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
  composeRenderProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "../utils/classes"
import { DataTheme } from "./types"

const Tabs = ({ className, ...props }: TabsProps) => (
  <AriaTabs
    className={composeRenderProps(className, (className) => cn("tabs", className))}
    {...props}
  />
)

const tabListVariants = tv({
  base: "tab-list",
  variants: {
    variant: {
      box: "tab-list-box",
      border: "tab-list-border",
    },
    color: {
      neutral: "tab-list-neutral",
      primary: "tab-list-primary",
      secondary: "tab-list-secondary",
      accent: "tab-list-accent",
      info: "tab-list-info",
      success: "tab-list-success",
      warning: "tab-list-warning",
      error: "tab-list-error",
    },
    size: {
      xs: "tab-list-xs",
      sm: "tab-list-sm",
      md: "tab-list-md",
      lg: "tab-list-lg",
      xl: "tab-list-xl",
    },
  },
})
interface TabListProps<T> extends AriaTabListProps<T>, VariantProps<typeof tabListVariants> {
  dataTheme?: DataTheme
}
const TabList = <T extends object>({
  className,
  dataTheme,
  variant,
  color,
  size,
  ...props
}: TabListProps<T>) => (
  <AriaTabList
    data-theme={dataTheme}
    className={composeRenderProps(className, (className) =>
      tabListVariants({
        variant,
        color,
        size,
        className,
      }),
    )}
    {...props}
  />
)

interface TabProps extends AriaTabProps {
  indicator?: ReactNode
}
const Tab = ({ className, children, indicator, ...props }: TabProps) => {
  const getIndicator = () => {
    if (indicator && isValidElement(indicator)) {
      return cloneElement(indicator as ReactElement<{ className?: string }>, {
        className: cn(
          "tab-indicator",
          (indicator as ReactElement<{ className?: string }>).props.className,
        ),
      })
    }
    return <span className="tab-indicator" />
  }

  return (
    <AriaTab
      className={composeRenderProps(className, (className) => cn("tab", className))}
      {...props}
    >
      {(renderProps) => (
        <>
          {renderProps.isSelected && getIndicator()}
          <div className="tab-content">
            {typeof children === "function" ? children(renderProps) : children}
          </div>
        </>
      )}
    </AriaTab>
  )
}

const TabPanel = ({ className, ...props }: TabPanelProps) => (
  <AriaTabPanel
    className={composeRenderProps(className, (className) => cn("tab-panel", className))}
    {...props}
  />
)

Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panel = TabPanel

export { Tabs }
export type { TabListProps, TabPanelProps, TabProps, TabsProps }
