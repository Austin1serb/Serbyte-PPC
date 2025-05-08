import * as m from "motion/react-m"

import Link from "next/link"
import { Icon } from "./Icon"

const container = {
  hidden: {
    x: -12,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.2,
    },
  },
}

const linkLogo = {
  hidden: {
    opacity: 0,
    x: -12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const Socials: React.FC<{ socialLinks: { href: string; icon: string }[] }> = ({ socialLinks }) => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <Link rel="noopener noreferrer" target="_blank" key={link.href} className="footer-link" href={link.href}>
          <Icon name={link.icon} height={15} width={15} />
        </Link>
      ))}
    </div>
  )
}
