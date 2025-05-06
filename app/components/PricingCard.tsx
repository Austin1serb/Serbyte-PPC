import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import { Icon } from "./Icon"
import { AnimatedInViewProps } from "./AnimatedInView"
import * as motion from "motion/react-client"

type Accent = "white" | "slate" | "black"

export interface PricingCardProps extends Partial<AnimatedInViewProps<"article">> {
  plan: string
  tagline?: string
  price: string
  description: string
  features: string[]
  accent?: Accent

  ctaLabel?: string
  icon: StaticImageData
}

/* -------------------------------------------------------------------------- */
/*                         PALETTE / UTILITY MAPPINGS                         */
/* -------------------------------------------------------------------------- */

const palette: Record<
  Accent,
  {
    cardBg: string
    cardText: string
    iconBg: string
    priceText: string
    checkText: string
    btnBg: string
    btnText: string
  }
> = {
  white: {
    cardBg: "bg-gradient-to-tr from-white to-slate-50",
    cardText: "text-slate-900",
    iconBg: "bg-slate-200",
    priceText: "text-slate-900",
    checkText: "text-white",
    btnBg: "bg-black",
    btnText: "text-white",
  },
  slate: {
    cardBg: "bg-gradient-to-tr from-slate-50 to-slate-200",
    cardText: "text-slate-900",
    iconBg: "bg-white",
    priceText: "text-slate-900",
    checkText: "text-white",
    btnBg: "bg-slate-700",
    btnText: "text-white",
  },
  black: {
    cardBg: "bg-gradient-to-tr from-slate-700 to-slate-900",
    cardText: "text-white",
    iconBg: "bg-slate-700",
    priceText: "text-white",
    checkText: "text-white",
    btnBg: "bg-white",
    btnText: "text-slate-800",
  },
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export function PricingCard({ plan, tagline, price, description, features, accent = "slate", ctaLabel = "Get started", icon, ...rest }: PricingCardProps) {
  const c = palette[accent]

  return (
    <motion.article
      {...rest}
      className={clsx("flex-full flex max-w-sm min-w-2xs flex-col gap-4 rounded-3xl border border-slate-400 p-8 shadow-lg md:gap-6", c.cardBg, c.cardText)}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Header                                                            */}
      {/* ------------------------------------------------------------------ */}
      <header className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* tagline + icon row */}
        <div className="flex items-center gap-4 md:gap-2.5">
          <div className={clsx("flex-center aspect-square max-h-16 min-h-13 max-w-16 min-w-13 rounded-xl border border-slate-400 text-lg", c.iconBg)}>
            <Image src={icon} alt={plan} width={48} height={48} className="h-3/5 w-3/5 object-contain saturate-150" />
          </div>

          <div className="flex flex-col gap-1 py-2">
            {tagline && <p className={clsx("min-w-38 text-sm leading-none font-light tracking-tight", accent === "black" && "text-gray-300")}>{tagline}</p>}
            <h3 className="text-md font-semibold tracking-wide">{plan}</h3>
          </div>
        </div>

        {/* Description */}
        <p className={clsx("line-clamp-3 text-sm leading-relaxed font-light", accent === "black" ? "text-gray-300" : "text-slate-600")}>{description}</p>

        {/* Price */}
        <div>
          <p className={clsx("text-xs tracking-wide uppercase", accent === "black" ? "text-gray-400" : "text-slate-500")}>Starting at</p>
          <p className={clsx("text-3xl font-bold", c.priceText)}>{price}</p>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* Feature list                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold">What&apos;s included</p>
        <ul className="flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-nowrap">
              <Icon name="check" className={clsx("check-icon bg-slate-500/70", c.checkText)} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                               */}
      {/* ------------------------------------------------------------------ */}
      <button
        type="button"
        className={clsx("bubble-hover button-shadow mt-auto rounded-full px-6 py-3 text-sm font-medium transition hover:translate-y-0.5", c.btnBg, c.btnText)}
      >
        {ctaLabel}
      </button>
    </motion.article>
  )
}
