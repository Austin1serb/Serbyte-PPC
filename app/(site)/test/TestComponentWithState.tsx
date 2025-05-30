// TestComponentWithState.tsx
"use client"
import { useAppState } from "./StateContext"

export function TestComponentWithState() {
  const { theme, setTheme, color, setColor, menuOpen, toggleMenuOpen } = useAppState()

  console.log("🔴 TestComponent RE-RENDERED")

  return (
    <div className="p-8 space-y-4">
      <div className="space-x-2">
        <button onClick={() => setTheme("dark")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Set Dark Theme
        </button>
        <button onClick={() => setTheme("light")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Set Light Theme
        </button>
      </div>

      <div className="space-x-2">
        <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-500 text-white rounded">
          Red
        </button>
        <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Blue
        </button>
        <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-500 text-white rounded">
          Green
        </button>
      </div>

      <button onClick={toggleMenuOpen} className="px-4 py-2 bg-purple-500 text-white rounded">
        Toggle Menu (currently: {menuOpen ? "open" : "closed"})
      </button>

      {/* Apply styles with conditional classes based on state */}
      <div className={`p-4 rounded ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>Theme sensitive box</div>

      <div className={`p-4 rounded ${color === "red" ? "bg-red-100" : color === "blue" ? "bg-blue-100" : "bg-green-100"}`}>Color sensitive box</div>

      {menuOpen && <div className="bg-purple-100 p-4 rounded">Only visible when menu is open</div>}
    </div>
  )
}
