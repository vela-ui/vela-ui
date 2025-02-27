"use client"

import { useEffect, useState } from "react"
import { createContext } from "../../utils/context"
import { DataTheme } from "../types"

export type ThemeProviderContextProps = {
  theme: DataTheme
  setTheme: (theme: DataTheme) => void
}

export const [ThemeProviderContext, useTheme] = createContext<ThemeProviderContextProps>({
  name: "ThemeProviderContext",
  strict: false,
})

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: DataTheme
  storageKey?: string
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  storageKey = "vela-theme",
  ...props
}) => {
  const [theme, setTheme] = useState<DataTheme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage?.getItem(storageKey) as DataTheme) || defaultTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement
      root.setAttribute("data-theme", theme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (value: DataTheme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, value)
      }
      setTheme(value)
    },
  }

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  )
}
