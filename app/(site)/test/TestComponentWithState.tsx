// TestComponentWithState.tsx
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
      className={`**:transition-all **:duration-300 flex flex-col justify-between space-y-4w-full py-8 h-full ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <Header theme={theme} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <AccentPicker accent={accent} setAccent={setAccent} theme={theme} />
      <InteractiveCard theme={theme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <StateDisplay theme={theme} accent={accent} menuOpen={menuOpen} />
    </div>
  )
}

// Header Component
function Header({ theme }: { theme: "light" | "dark" }) {
  const ref = useRenderTracker("Header")

  return (
    <div ref={ref} className="text-center space-y-2">
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
function ThemeSwitcher({ theme, setTheme }: { theme: "light" | "dark"; setTheme: (t: "light" | "dark") => void }) {
  const ref = useRenderTracker("ThemeSwitcher")

  return (
    <div ref={ref} className="flex justify-center gap-2">
      <button
        aria-label="button"
        onClick={() => setTheme("light")}
        className={`px-6 py-3 rounded-full font-medium 
          ${theme === "light" ? "bg-gray-900 text-white " : "bg-gray-700 text-gray-400"} hover:scale-105 border border-gray-400`}
      >
        ☀️ Light
      </button>
      <button
        aria-label="button"
        onClick={() => setTheme("dark")}
        className={`px-6 py-3 rounded-full font-medium hover:scale-105 border border-gray-400

          ${theme === "dark" ? "bg-white text-gray-900" : "bg-gray-200 text-gray-600"}
          `}
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
      <h2 className={`text-lg font-semibold text-center ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>Choose Accent</h2>
      <div className="flex justify-center gap-3">
        <button
          aria-label="button"
          onClick={() => setAccent("violet")}
          className={`w-12 h-12 hover:scale-110 rounded-full bg-violet-500 
            ${accent === "violet" ? "ring-6 ring-violet-200" : "ring-violet-900 bg-violet-500/50"}`}
        />
        <button
          aria-label="button"
          onClick={() => setAccent("emerald")}
          className={`w-12 h-12 hover:scale-110 rounded-full bg-emerald-500 ${accent === "emerald" ? "ring-6 ring-emerald-200" : "ring-emerald-900 bg-emerald-500/50"}`}
        />
        <button
          aria-label="button"
          onClick={() => setAccent("amber")}
          className={`w-12 h-12 rounded-full hover:scale-110 bg-amber-500 ${accent === "amber" ? "ring-6 ring-amber-200" : "ring-amber-900 bg-amber-500/50"}`}
        />
      </div>
    </div>
  )
}

// Interactive Card Component
function InteractiveCard({ theme, menuOpen, setMenuOpen }: { theme: "light" | "dark"; menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const ref = useRenderTracker("InteractiveCard")

  return (
    <div ref={ref} className="relative max-w-md mx-auto rounded-lg">
      <div
        className={`relative max-w-md mx-auto border border-gray-200 rounded-2xl shadow-lg overflow-hidden
        ${theme === "light" ? "bg-gray-50 shadow-gray-200" : "bg-gray-700 shadow-black/50"}`}
      >
        <div className="p-6 space-y-2">
          <h3
            className={`text-xl font-semibold
            ${theme === "light" ? "text-gray-900" : "text-white"}`}
          >
            Open Menu Demo
          </h3>

          <button
            aria-label="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full py-3 rounded-lg font-medium 
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
          className={`overflow-hidden
          ${menuOpen ? "max-h-40" : "max-h-0"}`}
        >
          <div
            className={`p-6 border-t
            ${theme === "dark" ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}
          >
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
      <div className="text-center mt-5 text-sm font-mono space-y-1 flex gap-4 justify-center capitalize ">
        <div className="flex gap-1">theme: {theme} </div>
        <div className="flex gap-1">accent: {accent}</div>
        <div className="flex gap-1">menu: {menuOpen ? "Open" : "Closed"}</div>
      </div>
    </div>
  )
}
