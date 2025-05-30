// TestComponent.tsx
"use client"
import { useUI } from "./zero"

export function TestComponent() {
  // production system would be a simple build-time that removes detect the second value without the user having to pass it in like this:
  const [theme, setTheme] = useUI<"light" | "dark">("light", "theme")
  const [color, setColor] = useUI<"red" | "blue" | "green">("red", "color")

  const [menuOpen, setMenuOpen, toggleMenuOpen] = useUI<boolean>(false, "menuOpen")

  console.log("🔴 DeepComponent RE-RENDERED")

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
        <span className="menu-open-true:hidden">Open Menu {`currently: closed`}</span>
        <span className="menu-open-false:hidden">Close Menu {`currently: open`}</span>
      </button>

      {/* Test the variants */}
      <div className="theme-dark:bg-gray-900 theme-light:bg-gray-100 p-4 rounded">Theme sensitive box</div>

      <div className="color-red:bg-red-100 color-blue:bg-blue-100 color-green:bg-green-100 p-4 rounded">Color sensitive box</div>

      <div className="menu-open-true:block menu-open-false:hidden bg-purple-100 p-4 rounded">Only visible when menu is open</div>
    </div>
  )
}
