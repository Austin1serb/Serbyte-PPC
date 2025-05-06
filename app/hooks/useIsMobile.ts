"use client"
import { useSyncExternalStore } from "react"
import { getMediaQueryStore } from "../utils/getMediaQueryStore"

/**
 * Hook to check if the screen is mobile
 * @param breakpoint - The breakpoint to check against
 * @returns true if the screen is mobile, false otherwise
 */
export function useIsMobile(breakpoint = 768) {
  const store = getMediaQueryStore(breakpoint)

  return useSyncExternalStore(
    (cb) => {
      store.subscribers.add(cb)
      return () => store.subscribers.delete(cb)
    },
    () => store.isMatch,
    () => false
  )
}
