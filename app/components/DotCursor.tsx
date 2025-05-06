"use client"
import clsx from "clsx"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"

const WIDTH = 20
const HEIGHT = 20

export const DotCursor = () => {
  const [text, setText] = useState("")
  const hovered = useRef(false)
  const [whileHover, setWhileHover] = useState(false)

  const springConfig = { stiffness: 400, damping: 50 }

  const x = useMotionValue(300)
  const y = useMotionValue(300)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const width = useSpring(WIDTH, springConfig)
  const height = useSpring(HEIGHT, springConfig)

  useLayoutEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const targets = document.querySelectorAll(".hover-target")

    const enter = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      hovered.current = true
      setText(target.getAttribute("data-text") || "")
      width.set(80)
      height.set(30)
      setWhileHover(true)
    }

    const leave = () => {
      hovered.current = false
      setText("")
      width.set(WIDTH)
      height.set(HEIGHT)
      setWhileHover(false)
    }

    window.addEventListener("mousemove", move)
    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter)
      el.addEventListener("mouseleave", leave)
    })

    return () => {
      window.removeEventListener("mousemove", move)
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
      })
    }
  }, [x, y])

  return (
    <motion.div
      style={{ x: springX, y: springY, width, height }}
      className={clsx(
        "backdrop-blur-[1px] pointer-events-none fixed top-0 left-0 z-[60] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-1 text-center text-xs font-bold text-clip mix-blend-difference",
        whileHover ? "backdrop-blur-[2px]" : ""
      )}
    >
      <AnimatePresence>
        {text && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { opacity: { duration: 0.3, delay: 0.2 } } }}
            exit={{ opacity: 0 }}
            className="text-nowrap"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
