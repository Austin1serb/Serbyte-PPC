"use client"
import clsx from "clsx"
import { useState } from "react"

const page: React.FC = () => {
  const [color, setColor] = useState<string>("")

  return (
    <div className="flex flex-col h-screen w-screen inside-container">
      <div className="h-1/2 w-1/2 bg-red-500" onClick={() => setColor("red")} />
      <div className="h-1/2 w-1/2 bg-blue-500" onClick={() => setColor("blue")} />
      <div className="h-1/2 w-1/2 bg-green-500" onClick={() => setColor("green")} />
      <hr />
      <div
        className={clsx("h-1/2 w-1/2  bg-amber-50", color === "green" && "hidden")}
        style={{ backgroundColor: color === "red" && "purple" } as React.CSSProperties}
      />
      <div className="h-1/2 w-1/2  bg-amber-50" style={{ backgroundColor: color === "blue" && "purple" } as React.CSSProperties} />
      <div className="h-1/2 w-1/2  bg-amber-50" style={{ backgroundColor: color === "green" && "purple" } as React.CSSProperties} />
    </div>
  )
}

export default page
