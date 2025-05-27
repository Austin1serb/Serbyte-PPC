export const BeforeAfterSliderSkeleton: React.FC = () => {
  return (
    <div className="relative w-full min-h-[860px] max-h-[860px] shadow-xl rounded-xl border border-gray-200 bg-gray-100">
      <div className="absolute top-0 bottom-0 flex items-center justify-center z-5 w-0.5 bg-white -translate-x-1/2 left-1/2">
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full shadow-lg cursor-col-resize flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
