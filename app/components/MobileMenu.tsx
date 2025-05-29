"use client"
import clsx from "clsx"
import { Link } from "../utils/Link"
import { env } from "../utils/env"

export const MobileMenu: React.FC<{ navItems: { name: string; href: string }[] }> = ({ navItems }) => {
  const toggle = () => {
    if (env.isClient) {
      document.body.dataset.mobileMenu = document.body.dataset.mobileMenu === "open" ? "closed" : "open"
      console.log(document.body.dataset)
    }
  }
  return (
    <ul className={clsx("mobile-menu-container flex flex-col gap-3 rounded-b-lg border-gray-200 px-4 transition-all duration-300 ease-in-out md:hidden")}>
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
      <li
        className={clsx(
          "mobile-menu-item transform pt-3 transition-all duration-300 ease-in-out"
          // open ? "translate-x-0 opacity-100 delay-400" : "-translate-x-5 opacity-0"
        )}
      >
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
