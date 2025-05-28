"use client"
import type { SpringOptions } from "motion/react"
import { useRef, useCallback, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { useRAFstate } from "../hooks/useRAFstate"

interface TiltedWrapperProps {
  children: React.ReactNode
  height?: React.CSSProperties["height"]
  width?: React.CSSProperties["width"]
  scaleOnHover?: number
  rotateAmplitude?: number

  className?: string
  borderRadius?: string
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

interface MousePosition {
  x: number
  y: number
  rotateX: number
  rotateY: number
  velocityY: number
}

export default function TiltedWrapper({
  children,
  height = "100%",
  width = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  className = "",
  borderRadius = "15px",
}: TiltedWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const lastMousePositionRef = useRef({ x: 0, y: 0 })
  const lastUpdateTimeRef = useRef(0)

  // Use RAF state for smooth mouse position updates
  const [mousePosition, setMousePosition] = useRAFstate<MousePosition>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    velocityY: 0,
  })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const [opacity, setOpacity] = useRAFstate(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  })

  // Throttled mouse handler to reduce calculations
  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return

      const now = performance.now()
      // Throttle to ~60fps manually for better control
      if (now - lastUpdateTimeRef.current < 16) return
      lastUpdateTimeRef.current = now

      const rect = ref.current.getBoundingClientRect()
      const offsetX = e.clientX - rect.left - rect.width / 2
      const offsetY = e.clientY - rect.top - rect.height / 2

      const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
      const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

      // Calculate velocity for figcaption rotation
      const velocityY = offsetY - lastMousePositionRef.current.y
      lastMousePositionRef.current = { x: offsetX, y: offsetY }

      // Update RAF state - this will be applied on next animation frame
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        rotateX: rotationX,
        rotateY: rotationY,
        velocityY: velocityY * 0.6,
      })
    },
    [rotateAmplitude, setMousePosition]
  )

  // Apply the RAF state updates to motion values
  // This runs on animation frames for smooth updates
  useEffect(() => {
    x.set(mousePosition.x)
    y.set(mousePosition.y)
    rotateX.set(mousePosition.rotateX)
    rotateY.set(mousePosition.rotateY)
    rotateFigcaption.set(-mousePosition.velocityY)
  }, [mousePosition, x, y, rotateX, rotateY, rotateFigcaption])

  const handleMouseEnter = useCallback(() => {
    scale.set(scaleOnHover)
  }, [scale, scaleOnHover, setOpacity])

  const handleMouseLeave = useCallback(() => {
    setOpacity(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)

    // Reset RAF state
    setMousePosition({
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      velocityY: 0,
    })
  }, [opacity, scale, rotateX, rotateY, rotateFigcaption, setMousePosition])

  return (
    <figure
      ref={ref}
      className={`relative w-full h-full [perspective:800px] flex flex-col items-center justify-center `}
      style={{
        height,
        width,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`relative h-full w-full [transform-style:preserve-3d] ${className}`}
        style={{
          rotateX,
          rotateY,
          scale,
          borderRadius,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full will-change-transform [transform:translateZ(0)] overflow-hidden sm:p-5 p-2.5"
          style={{
            borderRadius,
          }}
        >
          {children}
        </div>
      </motion.div>
    </figure>
  )
}
