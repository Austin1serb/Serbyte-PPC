// app/_components/DotCursor.tsx
"use client"

import { useEffect, useRef } from "react"
import { frame, useSpring } from "motion/react"
import { MotionDiv, MotionSpan } from "../utils/lazy-ui"

const BASE_W = 20
const BASE_H = 20
const HOVER_H = 30
const PAD_X = 8 // px padding left/right around text
const MAX_W = 260 // hard cap so long labels don't get silly-wide
const spring = { stiffness: 400, damping: 50, restDelta: 0.001 }

export function DotCursor() {
  const labelRef = useRef<HTMLSpanElement>(null)
  const lastTargetRef = useRef<HTMLElement | null>(null)

  // motion values (no React state → no rerenders)
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)
  const w = useSpring(BASE_W, spring)
  const h = useSpring(BASE_H, spring)
  const labelOpacity = useSpring(0, { stiffness: 300, damping: 40 })

  useEffect(() => {
    // turn off on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const onMove = (ev: PointerEvent) => {
      const { clientX, clientY } = ev
      frame.read(() => {
        x.set(clientX)
        y.set(clientY)
      })

      const el = (ev.target as Element | null)?.closest?.<HTMLElement>("[data-text]") ?? null
      if (el === lastTargetRef.current) return
      lastTargetRef.current = el

      const text = el?.getAttribute("data-text") ?? ""
      const span = labelRef.current

      if (!el || !text || reduce) {
        if (span) span.textContent = ""
        frame.read(() => {
          w.set(BASE_W)
          h.set(BASE_H)
          labelOpacity.set(0)
        })
        return
      }

      // Set text, measure width, then grow bubble to fit
      if (span) {
        span.textContent = text
        // measure after textContent assignment (sync)
        const textW = Math.ceil(span.scrollWidth)
        const targetW = Math.min(Math.max(BASE_W, textW + PAD_X * 2), MAX_W)

        frame.read(() => {
          w.set(targetW)
          h.set(HOVER_H)
        })
        // fade text after width begins expanding
        frame.update(() => labelOpacity.set(1))
      }
    }

    const onLeaveWindow = () => {
      lastTargetRef.current = null
      if (labelRef.current) labelRef.current.textContent = ""
      frame.read(() => {
        w.set(BASE_W)
        h.set(BASE_H)
        labelOpacity.set(0)
      })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeaveWindow)

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeaveWindow)
    }
  }, [x, y, w, h, labelOpacity])

  return (
    <MotionDiv
      style={{
        x,
        y,
        width: w,
        height: h,
        willChange: "transform, width, height",
      }}
      className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2 rounded-full isolate overflow-hidden bg-white mix-blend-difference flex items-center justify-center w-fit backdrop-blur-[1px]"
    >
      {/* text stays crisp (not blended, not scaled) */}
      <MotionSpan
        ref={labelRef}
        style={{ opacity: labelOpacity }}
        className="relative z-4  whitespace-nowrap px-2 text-sm font-semibold leading-none select-none"
      />
    </MotionDiv>
  )
}
