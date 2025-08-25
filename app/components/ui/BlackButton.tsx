export const BlackButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      type="button"
      className="bubble-hover button-shadow flex w-fit items-center gap-1 rounded-full bg-black px-4 py-3 text-sm font-medium text-white hover:translate-y-0.5 hover:shadow-none"
    >
      {children}
    </button>
  )
}
