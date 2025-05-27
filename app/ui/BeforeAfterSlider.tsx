"use client"
import { useRef } from "react"
import * as motion from "motion/react-m"
import { useMotionValue, useSpring, useTransform } from "motion/react"

interface BeforeAfterProps {
  before: React.ReactNode
  after: React.ReactNode
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ before, after }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // Single spring motion value - everything derives from this
  const sliderPosition = useMotionValue(50)
  const springPosition = useSpring(sliderPosition, {
    stiffness: 400,
    damping: 30,
  })

  // All transforms derive from the single spring value
  const clipPath = useTransform(springPosition, [0, 100], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
  const sliderLeft = useTransform(springPosition, (value) => `${value}%`)
  const afterLabelOpacity = useTransform(sliderPosition, [40, 60], [0, 1])

  const beforeLabelOpacity = useTransform(sliderPosition, [60, 40], [0, 1])

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))

    sliderPosition.set(percentage)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) {
      updatePosition(e.touches[0].clientX)
    }
  }

  const handleTouchStart = () => {
    isDragging.current = true
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
  }

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-[860px] max-h-[860px] shadow-xl rounded-xl border border-gray-200 cursor-col-resize select-none touch-none"
        onMouseMove={handleMouseMove}
        onMouseUp={() => (isDragging.current = false)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => (isDragging.current = false)}
      >
        {before}

        <motion.div className="absolute inset-0" style={{ clipPath }}>
          {after}
        </motion.div>

        {/* Slider */}
        <motion.div
          className="absolute top-0 bottom-0 w-80 bg-transparent flex items-center justify-center z-5"
          style={{ left: sliderLeft, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-0.5 bg-white">
            <div
              className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full shadow-lg cursor-col-resize flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <svg className="w-6 h-6 text-gray-600 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Labels */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2 z-5 grid">
        <motion.div
          className="col-start-1 row-start-1 backdrop-blur-md bg-black/50 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
          initial={{ opacity: 0, y: -20, x: 0 }}
          style={{ opacity: afterLabelOpacity }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
            <span>After</span>
          </div>
        </motion.div>

        <motion.div
          className="col-start-1 row-start-1 backdrop-blur-md bg-black/50 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          style={{ opacity: beforeLabelOpacity }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full ">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            </div>
            <span>Before</span>
          </div>
        </motion.div>
      </div>
    </>
  )
}
