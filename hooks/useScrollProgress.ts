"use client"
import { useEffect, useState } from "react"

export const useScrollProgress = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const onScroll = () => setIsScrolled(window.scrollY > threshold)

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return isScrolled
}
