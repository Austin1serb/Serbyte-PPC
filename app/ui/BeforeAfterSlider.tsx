"use client"
import { useRef, useCallback, memo, useState, useEffect } from "react"
import * as motion from "motion/react-m"
import { useMotionValue, useSpring, useTransform, useInView } from "motion/react"

interface BeforeAfterProps {
  before: React.ReactNode
  after: React.ReactNode
  /** Initial slider position (0-100) */
  initialPosition?: number
  /** Spring animation config */
  springConfig?: {
    stiffness?: number
    damping?: number
  }
  /** Accessibility label for the slider */
  ariaLabel?: string
}

export const BeforeAfterSlider: React.FC<BeforeAfterProps> = memo(
  ({ before, after, initialPosition = 50, springConfig = { stiffness: 500, damping: 40 }, ariaLabel = "Before and after comparison slider" }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.9 })
    const isDragging = useRef(false)
    const [isDraggingState, setIsDraggingState] = useState(false)

    // Single spring motion value - everything derives from this
    const sliderPosition = useMotionValue(initialPosition)
    const springPosition = useSpring(sliderPosition, springConfig)

    // All transforms derive from the single spring value
    const clipPath = useTransform(springPosition, [0, 100], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    const sliderLeft = useTransform(springPosition, (value) => `${value}%`)
    const afterLabelOpacity = useTransform(sliderPosition, (value) => (value > 50 ? 1 : 0))
    const beforeLabelOpacity = useTransform(sliderPosition, (value) => (value < 50 ? 1 : 0))

    const updatePosition = useCallback(
      (clientX: number) => {
        if (!containerRef.current) return

        try {
          const rect = containerRef.current.getBoundingClientRect()
          const x = clientX - rect.left
          const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
          sliderPosition.set(percentage)
        } catch (error) {
          console.warn("BeforeAfterSlider: Error updating position", error)
        }
      },
      [sliderPosition]
    )

    const handleMouseMove = useCallback(
      (e: React.MouseEvent) => {
        if (isDragging.current) updatePosition(e.clientX)
      },
      [updatePosition]
    )

    const handleTouchMove = useCallback(
      (e: React.TouchEvent) => {
        if (isDragging.current) {
          updatePosition(e.touches[0].clientX)
        }
      },
      [updatePosition]
    )

    const handleTouchStart = useCallback(() => {
      isDragging.current = true
      setIsDraggingState(true)
    }, [])

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault()
      isDragging.current = true
      setIsDraggingState(true)
    }, [])

    const handleEnd = useCallback(() => {
      isDragging.current = false
      setIsDraggingState(false)
    }, [])

    // Keyboard support
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        const currentPos = sliderPosition.get()
        let newPos = currentPos

        switch (e.key) {
          case "ArrowLeft":
            e.preventDefault()
            newPos = Math.max(0, currentPos - 5)
            break
          case "ArrowRight":
            e.preventDefault()
            newPos = Math.min(100, currentPos + 5)
            break
          case "Home":
            e.preventDefault()
            newPos = 0
            break
          case "End":
            e.preventDefault()
            newPos = 100
            break
          default:
            return
        }

        sliderPosition.set(newPos)
      },
      [sliderPosition]
    )

    useEffect(() => {
      if (isInView) {
        setTimeout(() => {
          springPosition.set(initialPosition + 10)
        }, 200)

        setTimeout(() => {
          springPosition.set(initialPosition)
        }, 600)
      }
    }, [isInView])

    return (
      <div className="relative">
        <div
          ref={containerRef}
          className="relative w-full min-h-[860px] max-h-[860px] shadow-xl rounded-xl border border-gray-200 "
          onMouseMove={handleMouseMove}
          onMouseUp={handleEnd}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleEnd}
          role="img"
          aria-label={ariaLabel}
          style={{ cursor: isDraggingState ? "grabbing" : "", touchAction: "pan-y pinch-zoom" }}
        >
          {before}

          <motion.div className="absolute inset-0 pointer-events-none" style={{ clipPath }}>
            {after}
          </motion.div>

          {/* Slider */}
          <motion.div
            className="absolute top-0 bottom-0 bg-transparent flex items-center justify-center z-5"
            style={{ left: sliderLeft, transform: "translateX(-50%)" }}
          >
            <div className="h-full w-0.5 bg-white shadow-lg">
              <motion.div
                whileTap={{ scale: 0.8, color: "#493BFF", cursor: "grabbing" }}
                className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 "
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                style={{ cursor: "grab" }}
                aria-label="Drag to compare before and after"
              >
                <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Labels */}
        <div className="absolute top-30 left-1/2 -translate-x-1/2 z-5 grid">
          <motion.div
            className="col-start-1 row-start-1 backdrop-blur-md bg-black/50 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            style={{ opacity: afterLabelOpacity }}
            transition={{ delay: 0.4, duration: 0.5 }}
            aria-hidden="true"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              </div>
              <span>After</span>
            </div>
          </motion.div>

          <motion.div
            className="col-start-1 row-start-1 backdrop-blur-md bg-black/50 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg duration-200"
            style={{ opacity: beforeLabelOpacity }}
            aria-hidden="true"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full ">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              </div>
              <span>Before</span>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }
)

BeforeAfterSlider.displayName = "BeforeAfterSlider"
