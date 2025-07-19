"use client"
import clsx from "clsx"
import { Link } from "../utils/Link"
import { env } from "../utils/env"
import { useEffect, useRef } from "react"

export const MobileMenu: React.FC<{ navItems: { name: string; href: string }[] }> = ({ navItems }) => {
  const toggle = () => {
    if (env.isClient) {
      document.body.dataset.mobileMenu = document.body.dataset.mobileMenu === "open" ? "closed" : "open"
    }
  }

  const ref = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (document.body.dataset.mobileMenu !== "open") return
      if (ref.current && !ref.current.contains(e.target as Node)) {
        document.body.dataset.mobileMenu = "closed"
      }
    }
    window.addEventListener("pointerdown", onPointerDown, true)
    return () => window.removeEventListener("pointerdown", onPointerDown, true)
  }, [])

  return (
    <ul
      ref={ref}
      className={clsx("mobile-menu-container flex flex-col gap-3 rounded-b-lg border-gray-200 px-4 transition-all duration-300 ease-in-out md:hidden")}
    >
      {navItems.map((item, index) => (
        <li
          key={item.name}
          className="mobile-menu-item transform text-lg transition-all duration-300 ease-in-out"
          style={{ "--index": index } as React.CSSProperties}
        >
          <Link href={item.href} onClick={() => toggle()} className="block pt-4 font-medium">
            {item.name}
          </Link>
        </li>
      ))}
      <li className={clsx("mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out")}>
        <Link
          href="/#contact"
          onClick={() => toggle()}
          className="bubble-hover block rounded-full border border-gray-200 bg-white px-3 py-2 text-center font-medium shadow-lg duration-300 hover:border-white"
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
