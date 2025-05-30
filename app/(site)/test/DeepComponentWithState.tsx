// DeepComponentWithState.tsx
"use client"
import { useAppState } from "./StateContext"

export const DeepComponentWithState: React.FC = () => {
  const { setTheme } = useAppState()

  console.log("🔴 DeepComponent RE-RENDERED")

  return (
    <div className="space-x-2">
      <button onClick={() => setTheme("dark")} className="px-4 py-2 bg-blue-500 text-white rounded">
        Set Dark Theme
      </button>
      <button onClick={() => setTheme("light")} className="px-4 py-2 bg-blue-500 text-white rounded">
        Set Light Theme
      </button>
    </div>
  )
}
