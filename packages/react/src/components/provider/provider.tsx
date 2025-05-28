"use client"

import type { Href, RouterOptions } from "@react-types/shared"
import { useMemo } from "react"
import { I18nProvider, RouterProvider } from "react-aria-components"
import { createContext } from "../../lib/context"

export type ProviderContextProps = {
  /**
   * Prefix for all VelaUI classes.
   * @default undefined
   */
  prefix?: string
}

export const [ProviderContext, useProviderContext] = createContext<ProviderContextProps>({
  name: "ProviderContext",
  strict: false,
})

export interface VelaUIProviderProps extends ProviderContextProps {
  children: React.ReactNode
  /**
   * The locale to apply to the children.
   * @default "en-US"
   */
  locale?: string
  /**
   * Provides a client side router to all nested components such as
   * Link, Menu, Tabs, Table, etc.
   */
  navigate?: (path: Href, routerOptions: RouterOptions | undefined) => void
  /**
   * Convert an `href` provided to a link component to a native `href`
   * For example, a router might accept hrefs relative to a base path,
   * or offer additional custom ways of specifying link destinations.
   * The original href specified on the link is passed to the navigate function of the RouterProvider,
   * and useHref is used to generate the full native href to put on the actual DOM element.
   */
  useHref?: (href: Href) => string
}

export const VelaUIProvider: React.FC<VelaUIProviderProps> = ({
  children,
  locale = "en-US",
  navigate,
  useHref,
  prefix,
}) => {
  let contents = children

  if (navigate) {
    contents = (
      <RouterProvider navigate={navigate} useHref={useHref}>
        {contents}
      </RouterProvider>
    )
  }

  const context = useMemo<ProviderContextProps>(() => ({ prefix }), [prefix])

  return (
    <ProviderContext value={context}>
      <I18nProvider locale={locale}>{contents}</I18nProvider>
    </ProviderContext>
  )
}
