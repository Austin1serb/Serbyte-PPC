"use client"
import clsx from "clsx"
import { frame, useSpring, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"
import * as m from "motion/react-m"

const WIDTH = 20
const HEIGHT = 20
const springConfig = { stiffness: 400, damping: 50, restDelta: 0.001 }

export function DotCursor() {
  const ref = useRef<HTMLDivElement>(null)

  // pointer position + size springs
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  const width = useSpring(WIDTH, springConfig)
  const height = useSpring(HEIGHT, springConfig)

  const [label, setLabel] = useState("")
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    /* -------- pointer follow -------- */
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        x.set(clientX)
        y.set(clientY)
      })
    }
    window.addEventListener("pointermove", handlePointerMove)

    /* -------- hover targets -------- */
    const targets = document.querySelectorAll<HTMLElement>("[data-text]")

    const onEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      if (target.getAttribute("data-text") === null) return
      setLabel(target.getAttribute("data-text") ?? "")
      frame.read(() => {
        width.set(120)
        height.set(30)
      })
      setHovering(true)
    }

    const onLeave = () => {
      setLabel("")
      frame.read(() => {
        width.set(WIDTH)
        height.set(HEIGHT)
      })
      setHovering(false)
    }

    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <m.div
      ref={ref}
      style={{ x, y, width, height }}
      className={clsx(
        "pointer-events-none fixed top-0 left-0 z-[60] flex -translate-x-1/2 -translate-y-1/2 cursor-none items-center justify-center rounded-full bg-white p-1 text-xs font-semibold mix-blend-difference",
        hovering ? "backdrop-blur-[2px]" : "backdrop-blur-[1px]"
      )}
    >
      <AnimatePresence>
        {label && (
          <m.span
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { opacity: { duration: 0.3, delay: 0.2 } } }}
            exit={{ opacity: 0 }}
            className="text-nowrap"
          >
            {label}
          </m.span>
        )}
      </AnimatePresence>
    </m.div>
  )
}
