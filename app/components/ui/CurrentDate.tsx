"use client"
import { useEffect, useState } from "react"

export const CurrentDate: React.FC<{ weekOut?: boolean }> = ({ weekOut = false }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const oneWeekFromNow = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)

  return (
    <>
      {weekOut
        ? oneWeekFromNow.toLocaleDateString("en-US", { month: "long", day: "numeric" })
        : date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
    </>
  )
}
