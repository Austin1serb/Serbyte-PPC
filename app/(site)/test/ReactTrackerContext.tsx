// RenderTracker.tsx - COMPLETELY FIXED VERSION
"use client"
import { useEffect, useRef, useState, createContext, useContext, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Store render data outside React to avoid re-renders
const renderData = new Map<string, number>()
const subscribers = new Set<() => void>()

// Context for the render tracker
interface RenderTrackerContextType {
  isEnabled: boolean
}

const RenderTrackerContext = createContext<RenderTrackerContextType>({ isEnabled: true })

// Individual render flash animation
interface RenderFlash {
  id: string
  x: number
  y: number
  width: number
  height: number
  timestamp: number
}

// Main provider component
export function RenderTrackerProvider({ children }: { children: ReactNode }) {
  const [showTracker, setShowTracker] = useState(true)
  const [renderCounts, setRenderCounts] = useState<Map<string, number>>(new Map())
  const [flashes, setFlashes] = useState<RenderFlash[]>([])
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Subscribe to render updates
  useEffect(() => {
    const updateDisplay = () => {
      // Compare previous and current renderData before updating state
      setRenderCounts((prev) => {
        const newMap = new Map(renderData)
        // Only update if different
        if (prev.size !== newMap.size || Array.from(prev.entries()).some(([k, v]) => newMap.get(k) !== v)) {
          return newMap
        }
        return prev
      })
    }

    subscribers.add(updateDisplay)

    // Update display every 100ms
    updateIntervalRef.current = setInterval(updateDisplay, 100)

    return () => {
      subscribers.delete(updateDisplay)
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current)
      }
    }
  }, [])

  // Function to add flash effect
  const addFlash = (element: HTMLElement, componentName: string) => {
    if (!showTracker || !element) return

    const rect = element.getBoundingClientRect()
    const flash: RenderFlash = {
      id: `${componentName}-${Date.now()}-${Math.random()}`,
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
      timestamp: Date.now(),
    }

    setFlashes((prev) => [...prev, flash])

    setTimeout(() => {
      setFlashes((prev) => prev.filter((f) => f.id !== flash.id))
    }, 2000)
  }

  // Expose the flash function globally for the hook to use
  useEffect(() => {
    ;(window as any).__addRenderFlash = addFlash
  }, [showTracker])

  return (
    <RenderTrackerContext.Provider value={{ isEnabled: showTracker }}>
      {children}

      {/* Toggle Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTracker(!showTracker)}
      >
        {!showTracker ? "🔴" : "🟢"} Render Tracker
      </motion.button>

      {/* Render Count Display */}
      <AnimatePresence>
        {showTracker && renderCounts.size > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-4 right-4 z-40 bg-black/90 text-white p-4 rounded-lg shadow-xl backdrop-blur-sm max-w-xs"
          >
            <h3 className="text-sm font-bold mb-2 text-gray-300">Component Renders</h3>
            <div className="space-y-1 max-h-96 overflow-y-auto">
              {Array.from(renderCounts.entries()).map(([id, count]) => (
                <div key={id} className="flex justify-between items-center text-sm">
                  <span className="font-mono text-gray-300">{id}</span>
                  <span className="font-bold tabular-nums">{count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flash Overlays */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <AnimatePresence>
          {showTracker &&
            flashes.map((flash) => (
              <motion.div
                key={flash.id}
                className="absolute"
                style={{
                  left: flash.x,
                  top: flash.y,
                  width: flash.width,
                  height: flash.height,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-red-500 rounded"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-red-500/20 rounded"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </RenderTrackerContext.Provider>
  )
}

// Hook to track renders - COMPLETELY FIXED VERSION
export function useRenderTracker(componentName: string) {
  const ref = useRef<HTMLDivElement>(null)
  const { isEnabled } = useContext(RenderTrackerContext)
  const renderCountRef = useRef(0)

  useEffect(() => {
    if (!isEnabled) return

    // Increment render count
    renderCountRef.current += 1

    // Update global render data (doesn't cause re-renders)
    renderData.set(componentName, renderCountRef.current)

    // Add flash effect if element exists
    if (ref.current && (window as any).__addRenderFlash) {
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        if (ref.current) {
          ;(window as any).__addRenderFlash(ref.current, componentName)
        }
      })
    }
  })

  return ref
}
