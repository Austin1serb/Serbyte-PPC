"use client"
import { useEffect } from "react"

export const ScrollTrigger: React.FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollBy(0, 1)
    }, 800)
    return () => clearTimeout(timeout)
  }, [])
  return null
}
