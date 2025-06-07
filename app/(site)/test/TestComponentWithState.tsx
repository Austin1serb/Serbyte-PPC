"use client"

import { useState } from "react"

import { useRenderTracker } from "./ReactTracker"

export function TestComponentWithState() {
  const ref = useRenderTracker("TestComponentWithState")
  const [accent, setAccent] = useState<"violet" | "emerald" | "amber">("violet")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div
      ref={ref}
      className={`space-y-4 w-full flex h-full flex-col justify-between py-8 **:transition-all **:duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <Header theme={theme} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <AccentPicker accent={accent} setAccent={setAccent} theme={theme} />
      <InteractiveCard theme={theme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} accent={accent} />
      <StateDisplay theme={theme} accent={accent} menuOpen={menuOpen} />
    </div>
  )
}

// Header Component
function Header({ theme }: { theme: "light" | "dark" }) {
  const ref = useRenderTracker("Header")

  return (
    <div ref={ref} className="space-y-2 text-center">
      <h1 className={`\ text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"}`}>React State Management</h1>
      <p className={`text-gray-600 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>Reactive state management with React</p>
    </div>
  )
}

// Theme Switcher Component
function ThemeSwitcher({ theme, setTheme }: { theme: "light" | "dark"; setTheme: (t: "light" | "dark") => void }) {
  const ref = useRenderTracker("ThemeSwitcher")

  return (
    <div ref={ref} className="flex justify-center gap-2">
      <button
        aria-label="button"
        onClick={() => setTheme("light")}
        className={`rounded-full px-6 py-3 font-medium ${theme === "light" ? "bg-gray-900 text-white" : "bg-gray-700 text-gray-400"} border border-gray-400 hover:scale-105`}
      >
        ☀️ Light
      </button>
      <button
        aria-label="button"
        onClick={() => setTheme("dark")}
        className={`rounded-full border border-gray-400 px-6 py-3 font-medium hover:scale-105 ${theme === "dark" ? "bg-white text-gray-900" : "bg-gray-200 text-gray-600"} `}
      >
        🌙 Dark
      </button>
    </div>
  )
}

// Accent Picker Component
function AccentPicker({
  accent,
  setAccent,
  theme,
}: {
  accent: "violet" | "emerald" | "amber"
  setAccent: (a: "violet" | "emerald" | "amber") => void
  theme: "light" | "dark"
}) {
  const ref = useRenderTracker("AccentPicker")

  return (
    <div ref={ref} className="space-y-4 pb-2">
      <h2 className={`text-center text-lg font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>Choose Accent</h2>
      <div className="flex justify-center gap-3">
        <button
          aria-label="button"
          onClick={() => setAccent("violet")}
          className={`h-12 w-12 rounded-full bg-violet-500 hover:scale-110 ${accent === "violet" ? "ring-6 ring-violet-200" : "bg-violet-500/50 ring-violet-900"}`}
        />
        <button
          aria-label="button"
          onClick={() => setAccent("emerald")}
          className={`h-12 w-12 rounded-full bg-emerald-500 hover:scale-110 ${accent === "emerald" ? "ring-6 ring-emerald-200" : "bg-emerald-500/50 ring-emerald-900"}`}
        />
        <button
          aria-label="button"
          onClick={() => setAccent("amber")}
          className={`h-12 w-12 rounded-full bg-amber-500 hover:scale-110 ${accent === "amber" ? "ring-6 ring-amber-200" : "bg-amber-500/50 ring-amber-900"}`}
        />
      </div>
    </div>
  )
}

// Interactive Card Component
function InteractiveCard({
  theme,
  menuOpen,
  setMenuOpen,
  accent,
}: {
  theme: "light" | "dark"
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  accent: "violet" | "emerald" | "amber"
}) {
  const ref = useRenderTracker("InteractiveCard")

  return (
    <div ref={ref} className="relative mx-auto max-w-md rounded-lg">
      <div
        className={`relative mx-auto max-w-md overflow-hidden rounded-2xl border border-gray-200 shadow-lg ${theme === "light" ? "bg-gray-50 shadow-gray-200" : "bg-gray-700 shadow-black/50"}`}
      >
        <div className="space-y-2 p-6">
          <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"}`}>Open Menu Demo</h3>

          <button
            aria-label="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-full rounded-lg py-3 font-medium text-white hover:scale-[1.02] ${accent === "violet" ? "bg-violet-500 hover:bg-violet-600" : accent === "emerald" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-amber-500 hover:bg-amber-600"}`}
          >
            {menuOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>

        {/* Sliding Menu */}
        <div className={`overflow-hidden ${menuOpen ? "max-h-40" : "max-h-0"}`}>
          <div className={`border-t p-6 ${theme === "dark" ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}>
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>✨ This menu slides open and re-renders!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// State Display Component
function StateDisplay({ theme, accent, menuOpen }: { theme: "light" | "dark"; accent: "violet" | "emerald" | "amber"; menuOpen: boolean }) {
  const ref = useRenderTracker("StateDisplay")

  return (
    <div ref={ref}>
      <div
        className={`mt-5 flex justify-center gap-4 space-y-1 text-center font-mono text-sm capitalize ${accent === "violet" ? "text-violet-500" : accent === "emerald" ? "text-emerald-500" : "text-amber-500"}`}
      >
        <div className="flex gap-1">theme: {theme} </div>
        <div className="flex gap-1">accent: {accent}</div>
        <div className="flex gap-1">menu: {menuOpen ? "Open" : "Closed"}</div>
      </div>
    </div>
  )
}
