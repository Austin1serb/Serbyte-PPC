import { Icon } from "../Icon"
import { Link } from "../../utils/Link"
import { MobileMenuButton } from "./MobileMenuButton"
import { MobileMenu } from "./MobileMenu"

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Pricing", href: "/#pricing" },
]

export const TopBarV2: React.FC = () => {
  return (
    <nav className="font-switzer fixed top-5 left-1/2 z-10 flex w-fit -translate-x-1/2 justify-center text-base md:text-sm">
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
              className="
            md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 md:scrolled-down:opacity-100 md:scrolled-down:max-w-96 hidden items-center gap-4 font-medium transition-all duration-300 ease-in-out md:flex"
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
            <MobileMenuButton />
          </div>

          {/* Mobile Menu (renders always but hidden via overflow on wrapper) */}
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}
