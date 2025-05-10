"use client"

import dynamic from "next/dynamic"
import { Suspense, useState, useEffect } from "react"

const DotCursor = dynamic(() => import("./DotCursor").then((m) => m.DotCursor), {
  ssr: false,
})

export default function DesktopCursor() {
  const [hasFinePointer, setHasFinePointer] = useState(false)

  useEffect(() => {
    setHasFinePointer(window?.matchMedia("(pointer:fine)").matches)
  }, [])

  if (!hasFinePointer) return null
  return (
    <Suspense fallback={null}>
      <DotCursor />
    </Suspense>
  )
}
