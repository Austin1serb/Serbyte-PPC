// ComparisonLayout.tsx
"use client"
import { Icon } from "@/app/components/Icon"
import { TestComponent } from "./TestComponent"
import { TestComponentWithState } from "./TestComponentWithState"
import { useUI } from "./zero"

export default function Page() {
  const [, setActive] = useUI<"zero" | "react">("zero", "active")

  return (
    <div className="min-h-[100dvh] pt-20 bg-gray-100  border border-gray-200 mx-auto flex items-center justify-center">
      <div className="w-full shadow-lg rounded-lg max-w-xl mx-auto p-5 flex flex-col">
        {/* Button Header */}
        <div className="flex border  border-gray-200 rounded-t-lg text-white">
          <button
            onClick={() => setActive("zero")}
            className={`flex-1 py-4 px-6 font-semibold rounded-tl-lg active-zero:bg-gradient-to-r from-purple-600 to-blue-600 active-zero:text-white text-gray-600 active-zero:hover:bg-gray-100 `}
          >
            ⚡ Zero Re-render
          </button>
          <button
            onClick={() => setActive("react")}
            className={`flex-1 py-4 px-6 font-semibold rounded-tr-lg active-react:bg-gradient-to-l from-[#58C4E0] to-blue-500 active-react:text-white text-gray-600 active-react:hover:bg-gray-100 flex items-center justify-center gap-2`}
          >
            <Icon name="react" className="w-5 h-5 active-react:invert active-zero:invert-50" /> React State
          </button>
        </div>

        <div className={`w-full h-full overflow-hidden border  border-t-0 border-gray-200 rounded-b-lg`}>
          <div className="grid grid-cols-2 w-[200%] h-full items-center justify-start active-zero:translate-x-0 active-react:translate-x-[-50%]">
            <TestComponent />
            <TestComponentWithState />
          </div>
        </div>
      </div>
    </div>
  )
}
