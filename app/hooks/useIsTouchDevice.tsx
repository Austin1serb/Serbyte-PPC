import { useIsoMorphicEffect } from "@/hooks/useIsoMorphicEffect"
import { useState } from "react"
import { env } from "../utils/env"

export function useIsTouchDevice() {
  let [mq] = useState(() => (env.isClient && typeof window.matchMedia === "function" ? window.matchMedia("(pointer: coarse)") : null))
  let [isTouchDevice, setIsTouchDevice] = useState(mq?.matches ?? false)

  useIsoMorphicEffect(() => {
    if (!mq) return

    function handle(event: MediaQueryListEvent) {
      setIsTouchDevice(event.matches)
    }

    mq.addEventListener("change", handle)
    return () => mq!.removeEventListener("change", handle)
  }, [mq])

  return isTouchDevice
}
