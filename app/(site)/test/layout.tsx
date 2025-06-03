import { RenderTracker } from "./ReactTracker"

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <RenderTracker />
      {/* Global State Access variables card */}
      <div className="z-10 fixed bottom-0 right-0 w-full h-fit bg-white rounded-lg px-4 py-2 border-t border-gray-200">
        <span className="absolute -top-6 left-2 text-sm text-gray-500">Layout.tsx (Global State Access)</span>
        <div className="text-sm text-blue-500">Global UI State Variables</div>
        <div className="text-sm text-gray-500 active-zero:hidden">None</div>
        <div className="text-sm text-gray-500 active-react:hidden">
          <span className="theme-light:hidden">theme-dark</span>
          <span className="theme-dark:hidden">theme-light</span>
          <span className="accent-violet:block accent-violet:text-violet-500 hidden">accent-violet</span>
          <span className="accent-emerald:block accent-emerald:text-emerald-500 hidden">accent-emerald</span>
          <span className="accent-amber:block accent-amber:text-amber-500 hidden">accent-amber</span>
          <span className="menu-open-true:hidden">menu-open-true</span>
          <span className="menu-open-false:hidden">menu-open-false</span>
          <span className="active-zero:hidden">active-zero</span>
        </div>
      </div>
    </div>
  )
}

export default layout
