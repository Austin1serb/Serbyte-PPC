"use client"
import { useState } from "react"
import DotMenuIcon from "./DotMenuIcon"
import clsx from "clsx"
import { useMotionValueEvent } from "motion/react"
import { useScroll } from "motion/react"
import { isClient } from "../utils/isClient"
import { Icon } from "./Icon"
import { Link } from "../utils/Link"

export const TopBarV2: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState("up")
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isDesktop) return
    const diff = current - (scrollY.getPrevious() ?? 0)
    setScrollDirection(diff > 0 ? "down" : "up")
  })

  const navItems = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
  ]

  return (
    <nav className="font-switzer fixed top-5 z-10 flex w-fit left-1/2 -translate-x-1/2 justify-center text-base md:text-sm">
      {/* Wrapper that grows/shrinks on mobile */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="relative flex flex-col">
          {/* Top Row (always visible) */}
          <div className="flex items-center gap-4 px-4 py-3 md:gap-8 md:py-2.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-medium text-nowrap">
              <Icon name="serbyte" height={24} width={24} className="rounded shadow-md" />
              Serbyte Development
            </Link>

            {/* Desktop Navigation */}
            <ul
              className={clsx(
                "hidden items-center gap-4 font-medium transition-all duration-300 ease-in-out md:flex",
                scrollDirection === "down" ? "max-w-0 opacity-0" : "max-w-96 opacity-100"
              )}
            >
              {navItems.map((item) => (
                <li key={item.name} className="flex">
                  <Link href={item.href} className="bubble-hover p-1 px-2">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="flex">
                <Link
                  href="/#contact"
                  className="bubble-hover hidden rounded-full border border-gray-200 px-3 py-1 font-medium shadow-md duration-300 hover:translate-y-0.5 hover:border-white hover:shadow-none md:inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Dots Menu */}
            <button
              type="button"
              aria-label="Toggle navigation"
              onMouseEnter={() => {
                if (isClient && window?.innerWidth > 768) setScrollDirection("up")
              }}
              onClick={() => {
                if (isClient && window?.innerWidth <= 768) setOpen((prev) => !prev)
              }}
              className={clsx(
                "group right-3 h-6 w-6 text-sm duration-200 hover:cursor-pointer md:absolute",
                scrollDirection === "up" ? "md:opacity-0" : "opacity-100 delay-400"
              )}
            >
              <DotMenuIcon open={open} />
            </button>
          </div>

          {/* Mobile Menu (renders always but hidden via overflow on wrapper) */}
          <ul
            className={clsx(
              "flex flex-col gap-3 rounded-b-lg border-gray-200 px-4 transition-all duration-300 ease-in-out md:hidden",
              open ? "pointer-events-auto max-h-[300px] pb-4 opacity-100" : "pointer-events-none max-h-0 opacity-0"
            )}
          >
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={clsx("transform text-lg transition-all duration-300 ease-in-out", open ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0")}
                style={{ transitionDelay: open ? `${index * 0.1 + 0.2}s` : "0s" }}
              >
                <Link href={item.href} onClick={() => setOpen(false)} className="block pt-4 font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              className={clsx(
                "transform pt-3 transition-all duration-300 ease-in-out",
                open ? "translate-x-0 opacity-100 delay-400" : "-translate-x-5 opacity-0"
              )}
            >
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="bubble-hover block rounded-full border border-gray-200 bg-white px-3 py-2 text-center font-medium shadow-lg duration-300 hover:border-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
