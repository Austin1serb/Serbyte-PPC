// DeepComponentWithState.tsx
"use client"
import { H3 } from "@/app/ui/Elements"
import { useAppState } from "./StateContext"

export const DeepComponentWithState: React.FC = () => {
  const { setTheme } = useAppState()

  console.log("🔴 DeepComponent RE-RENDERED")

  return (
    <div className="space-x-2">
      <H3 className="text-xl">Deep Component With ReactState + Context</H3>
      <p>Separate from the parent component, but still has access to the state through context (causes re-renders)</p>
      <div className="flex gap-2 py-5">
        <button onClick={() => setTheme("dark")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Set Dark Theme
        </button>
        <button onClick={() => setTheme("light")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Set Light Theme
        </button>
      </div>
    </div>
  )
}
