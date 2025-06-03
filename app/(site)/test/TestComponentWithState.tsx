// TestComponentWithState.tsx
"use client"
import { useState } from "react"
import { useUI } from "./zero"

export function TestComponentWithState() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [accent, setAccent] = useState<"violet" | "emerald" | "amber">("violet")
  const [menuOpen, toggleMenu] = useState<boolean>(false)

  return (
    <div className={`transition-all duration-300 mx-auto ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
      <div className="mx-auto p-8 space-y-8">
        <Header theme={theme} />
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <AccentPicker accent={accent} setAccent={setAccent} />
        <InteractiveCard theme={theme} accent={accent} menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <StateDisplay theme={theme} accent={accent} menuOpen={menuOpen} />
      </div>
    </div>
  )
}

// Header Component
function Header({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className="text-center space-y-2">
      <h1
        className={`text-3xl font-bold \
          ${theme === "light" ? "text-gray-900" : "text-white"}`}
      >
        React State Management
      </h1>
      <p className={`text-gray-600 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>Reactive state management with React</p>
    </div>
  )
}

// Theme Switcher Component
function ThemeSwitcher({ theme, setTheme, zero }: { theme: "light" | "dark"; setTheme: (t: "light" | "dark") => void; zero?: boolean }) {
  if (zero) {
    const [, setTheme] = useUI<"light" | "dark">("light", "theme")
  }
  return (
    <div className="flex justify-center gap-2">
      <button
        aria-label="button"
        onClick={() => setTheme("light")}
        className={`px-6 py-3 rounded-full font-medium transition-all
          ${theme === "light" ? "bg-gray-900 text-white" : "bg-gray-800 text-gray-400"}
          hover:scale-105`}
      >
        ☀️ Light
      </button>
      <button
        aria-label="button"
        onClick={() => setTheme("dark")}
        className={`px-6 py-3 rounded-full font-medium transition-all
          ${theme === "dark" ? "bg-white text-gray-900" : "bg-gray-200 text-gray-600"}
          hover:scale-105`}
      >
        🌙 Dark
      </button>
    </div>
  )
}

// Accent Picker Component
function AccentPicker({ accent, setAccent }: { accent: "violet" | "emerald" | "amber"; setAccent: (a: "violet" | "emerald" | "amber") => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-center theme-light:text-gray-800 theme-dark:text-gray-200">Choose Accent</h2>
      <div className="flex justify-center gap-3">
        <button
          aria-label="button"
          onClick={() => setAccent("violet")}
          className={`w-12 h-12 rounded-full bg-violet-500 \
            ${accent === "violet" ? "ring-6 ring-violet-200" : "ring-violet-900 bg-violet-500/50"}
            transition-all hover:scale-110`}
        />
        <button
          aria-label="button"
          onClick={() => setAccent("emerald")}
          className={`w-12 h-12 rounded-full bg-emerald-500
            ${accent === "emerald" ? "ring-6 ring-emerald-200" : "ring-emerald-900 bg-emerald-500/50"}
            transition-all hover:scale-110`}
        />
        <button
          aria-label="button"
          onClick={() => setAccent("amber")}
          className={`w-12 h-12 rounded-full bg-amber-500
            ${accent === "amber" ? "ring-6 ring-amber-200" : "ring-amber-900 bg-amber-500/50"}
            transition-all hover:scale-110`}
        />
      </div>
    </div>
  )
}

// Interactive Card Component
function InteractiveCard({
  theme,
  accent,
  menuOpen,
  toggleMenu,
}: {
  theme: "light" | "dark"
  accent: "violet" | "emerald" | "amber"
  menuOpen: boolean
  toggleMenu: (open: boolean) => void
}) {
  return (
    <div className="relative max-w-md mx-auto border border-gray-600 rounded-lg">
      <div
        className={`rounded-2xl shadow-lg overflow-hidden transition-all
        ${theme === "light" ? "bg-gray-50 shadow-gray-200" : "bg-gray-800 shadow-black/50"}`}
      >
        <div className="p-6 space-y-4">
          <h3
            className={`text-xl font-semibold
            ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            Open Menu Demo
          </h3>

          <button
            aria-label="button"
            onClick={() => toggleMenu(!menuOpen)}
            className="w-full py-3 rounded-lg font-medium transition-all
              accent-violet:bg-violet-500 accent-violet:hover:bg-violet-600
              accent-emerald:bg-emerald-500 accent-emerald:hover:bg-emerald-600
              accent-amber:bg-amber-500 accent-amber:hover:bg-amber-600
              text-white hover:scale-[1.02]"
          >
            {menuOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>

        {/* Sliding Menu */}
        <div
          className={`transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-40" : "max-h-0"}`}
        >
          <div
            className={`p-6 border-t transition-all duration-300
            ${theme === "dark" ? "border-gray-700" : "border-gray-200"}
            ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
          >
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>✨ This menu slides open without re-rendering!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// State Display Component
function StateDisplay({ theme, accent, menuOpen }: { theme: "light" | "dark"; accent: "violet" | "emerald" | "amber"; menuOpen: boolean }) {
  return (
    <>
      <span className="theme-light:text-gray-500 theme-dark:text-gray-400 "></span>
      <div className="text-center mt-5 text-sm font-mono theme-light:text-gray-500 theme-dark:text-gray-400 space-y-1 flex gap-4 justify-center capitalize ">
        <div className="**:text-nowrap text-nowrap flex gap-1">theme: {theme} </div>
        <div className="**:text-nowrap text-nowrap flex gap-1">accent: {accent}</div>
        <div className="**:text-nowrap text-nowrap flex gap-1">menu: {menuOpen ? "Open" : "Closed"}</div>
      </div>
    </>
  )
}
