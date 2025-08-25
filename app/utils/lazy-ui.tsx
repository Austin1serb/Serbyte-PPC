"use client"

import dynamic from "next/dynamic"
import { useMediaQuery } from "../hooks/useMediaQuery"

const DotCursor = dynamic(() => import("../components/DotCursor").then((m) => m.DotCursor), {
  ssr: false,
})

export function DesktopCursor() {
  const hasFinePointer = useMediaQuery("(pointer:fine)")

  if (!hasFinePointer) return null
  return <DotCursor />
}
