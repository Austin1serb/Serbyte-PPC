// hooks/useLenisSnap.ts
"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import Snap from "lenis/snap"

export function useLenisSnap() {
  useEffect(() => {
    /* 1 — Lenis engine */
    const lenis = new Lenis({ autoRaf: false })

    /* 2 — Snap helper */
    const snap = new Snap(lenis, {
      type: "mandatory", // or 'proximity'
      lerp: 0.12, // smoothness (0-1)
      debounce: 200, // ms after wheel/touch ends before snapping
    })

    /* 3 — Register each section once; Snap handles resize internally */
    document.querySelectorAll<HTMLElement>("[data-snap]").forEach((el) => snap.addElement(el)) // ⬅️ NOTICE

    /* 4 — RAF loop */
    const raf = (t: number) => {
      lenis.raf(t)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    /* 5 — Cleanup */
    return () => {
      snap.destroy()
      lenis.destroy()
    }
  }, [])
}
