// StateContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

type Theme = "light" | "dark"
type Color = "red" | "blue" | "green"

interface StateContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  color: Color
  setColor: (color: Color) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  toggleMenuOpen: () => void
}

const StateContext = createContext<StateContextType | undefined>(undefined)

export function StateProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [color, setColor] = useState<Color>("red")
  const [menuOpen, setMenuOpen] = useState(false)

  console.log("🔴 StateProvider RE-RENDERED")

  const toggleMenuOpen = () => setMenuOpen((prev) => !prev)

  return (
    <StateContext.Provider
      value={{
        theme,
        setTheme,
        color,
        setColor,
        menuOpen,
        setMenuOpen,
        toggleMenuOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(StateContext)
  if (!context) throw new Error("useAppState must be used within StateProvider")
  return context
}
