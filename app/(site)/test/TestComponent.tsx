// TestComponent.tsx
"use client"
import { useUI } from "./zero"
import { useRenderTracker } from "./ReactTracker"

export function TestComponent() {
  const ref = useRenderTracker("TestComponent")
  const [, setTheme] = useUI<"light" | "dark">("light", "theme")
  const [, setAccent] = useUI<"violet" | "emerald" | "amber">("violet", "accent")
  const [, , toggleMenu] = useUI<boolean>(false, "menuOpen")

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between  **:transition-all **:duration-00
       w-full h-full space-y-4 py-8 theme-light:bg-white theme-dark:bg-gray-900 "
    >
      <Header />
      <ThemeSwitcher setTheme={setTheme} />
      <AccentPicker setAccent={setAccent} />
      <InteractiveCard toggleMenu={toggleMenu} />
      <StateDisplay />
    </div>
  )
}

// Header Component - Never re-renders!
function Header() {
  const ref = useRenderTracker("Zero.Header")

  return (
    <div ref={ref} className="text-center space-y-2">
      <h1
        className="text-3xl font-bold 
        theme-light:text-gray-900 theme-dark:text-white"
      >
        Zero UI State Management
      </h1>
      <p className="theme-light:text-gray-600 theme-dark:text-gray-400">
        Reactive state without re-rendering OR prop drilling. <br />
        <span className="text-sm text-gray-500">
          <span className="font-bold">Zero</span> re-renders, <span className="font-bold">Reactive</span> state, <span className="font-bold">Global</span> &{" "}
          <span className="font-bold">Scoped</span> state,{" "}
        </span>
      </p>
    </div>
  )
}

// Theme Switcher - Never re-renders!
function ThemeSwitcher({ setTheme }: { setTheme: (t: "light" | "dark") => void }) {
  const ref = useRenderTracker("Zero.ThemeSwitcher")

  return (
    <div ref={ref} className="flex justify-center gap-2">
      <button
        aria-label="button"
        onClick={() => setTheme("light")}
        className={`px-6 py-3 rounded-full font-medium
          theme-light:bg-gray-900 theme-light:text-white

          theme-dark:bg-gray-700 theme-dark:text-gray-200

          hover:scale-105 border border-gray-400`}
      >
        ☀️ Light
      </button>
      <button
        aria-label="button"
        onClick={() => setTheme("dark")}
        className={`px-6 py-3 rounded-full font-medium
          theme-dark:bg-white theme-dark:text-gray-900
          theme-light:bg-gray-200 theme-light:text-gray-600
          hover:scale-105 border border-gray-400`}
      >
        🌙 Dark
      </button>
    </div>
  )
}

// Accent Picker - Never re-renders!
function AccentPicker({ setAccent }: { setAccent: (a: "violet" | "emerald" | "amber") => void }) {
  const ref = useRenderTracker("Zero.AccentPicker")

  return (
    <div ref={ref} className="space-y-4 pb-2">
      <h2
        className="text-lg font-semibold text-center
        theme-light:text-gray-800 theme-dark:text-gray-200"
      >
        Choose Accent
      </h2>
      <div className="flex justify-center gap-3">
        <button
          aria-label="button"
          onClick={() => setAccent("violet")}
          className="w-12 h-12 rounded-full bg-violet-500/50 
            accent-violet:ring-6 accent-violet:ring-violet-200
            theme-dark:accent-violet:ring-violet-900
           hover:scale-110 accent-violet:bg-violet-500"
        />
        <button
          aria-label="button"
          onClick={() => setAccent("emerald")}
          className="w-12 h-12 rounded-full bg-emerald-500/50
            accent-emerald:ring-6 accent-emerald:ring-emerald-200
            theme-dark:accent-emerald:ring-emerald-900
           hover:scale-110 accent-emerald:bg-emerald-500"
        />
        <button
          aria-label="button"
          onClick={() => setAccent("amber")}
          className="w-12 h-12 rounded-full bg-amber-500/50
            accent-amber:ring-6 accent-amber:ring-amber-200
            theme-dark:accent-amber:ring-amber-900
           hover:scale-110 accent-amber:bg-amber-500"
        />
      </div>
    </div>
  )
}

// Interactive Card - Never re-renders!
function InteractiveCard({ toggleMenu }: { toggleMenu: () => void }) {
  const ref = useRenderTracker("Zero.InteractiveCard")

  return (
    <div
      ref={ref}
      className="relative max-w-md mx-auto border border-gray-200 rounded-2xl shadow-lg overflow-hidden
        theme-light:bg-gray-50 theme-dark:bg-gray-700
        theme-light:shadow-gray-200 theme-dark:shadow-black/50"
    >
      <div className="p-6 space-y-4">
        <h3
          className="text-xl font-semibold
            theme-light:text-gray-900 theme-dark:text-white"
        >
          Open Menu Demo
        </h3>

        <button
          aria-label="button"
          onClick={toggleMenu}
          className="w-full py-3 rounded-lg font-medium
              accent-violet:bg-violet-500 accent-violet:hover:bg-violet-600
              accent-emerald:bg-emerald-500 accent-emerald:hover:bg-emerald-600
              accent-amber:bg-amber-500 accent-amber:hover:bg-amber-600
              text-white hover:scale-[1.02]"
        >
          <span className="menu-open-true:hidden">Close Panel</span>
          <span className="menu-open-false:hidden">Open Panel</span>
        </button>
      </div>

      {/* Sliding Panel */}
      <div
        className="overflow-hidden
          menu-open-true:max-h-40 menu-open-false:max-h-0"
      >
        <div
          className="p-6 border-t theme-light:border-gray-200 theme-dark:border-gray-700
            theme-light:bg-white theme-dark:bg-gray-700/50"
        >
          <p className="theme-light:text-gray-600 theme-dark:text-gray-300">✨ This panel slides open without re-rendering!</p>
        </div>
      </div>
    </div>
  )
}

// State Display - Never re-renders!
function StateDisplay() {
  const ref = useRenderTracker("Zero.StateDisplay")

  return (
    <div ref={ref}>
      <div className="text-center mt-5 text-sm font-mono theme-light:text-gray-500 theme-dark:text-gray-400 space-y-1 flex gap-4 justify-center capitalize">
        <div className="**:text-nowrap text-nowrap flex gap-1">
          theme: <span className="theme-dark:hidden">Light</span>
          <span className="theme-light:hidden">Dark</span>
        </div>
        <div className="**:text-nowrap text-nowrap flex gap-1">
          accent:
          <span className="accent-violet:block hidden">Violet</span>
          <span className="accent-emerald:block hidden">Emerald</span>
          <span className="accent-amber:block hidden">Amber</span>
        </div>
        <div className="**:text-nowrap text-nowrap flex gap-1">
          menu:
          <span className="menu-open-true:hidden">Open</span>
          <span className="menu-open-false:hidden">Closed</span>
        </div>
      </div>
    </div>
  )
}
