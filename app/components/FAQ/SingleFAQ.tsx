"use client"
import * as m from "motion/react-m"
import { useState } from "react"

export const SingleFAQ = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl border border-gray-300 text-sm hover:cursor-pointer relative bg-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* header */}
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <m.div
          initial={false}
          animate={{ x: isOpen ? -30 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center gap-4 overflow-hidden will-change-transform"
        >
          <m.span initial={false} animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: 0.2 }}>
            0{index + 1}
          </m.span>
          <h3 className="font-medium">{question}</h3>
        </m.div>

        {/* toggle */}
        <button aria-label={isOpen ? "Close" : "Open"} type="button" className="relative flex h-5 w-5 items-center justify-center" title="Toggle answer">
          <div className="absolute h-0.5 w-2.5 rounded-full bg-black" />
          <m.div
            initial={false}
            animate={{ rotate: isOpen ? 0 : 270 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute h-0.5 w-2.5 rounded-full bg-black will-change-transform"
          />
        </button>
      </div>

      {/* answer */}
      <m.div
        className="grid overflow-hidden border-t border-gray-300 px-4"
        initial={false}
        animate={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0, paddingTop: isOpen ? 16 : 0, paddingBottom: isOpen ? 16 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut", paddingTop: { duration: 0.3 }, paddingBottom: { duration: 0.3 } }}
      >
        <div className="min-h-0">{answer}</div>
      </m.div>
    </div>
  )
}
