import clsx from "clsx"
import { Icon } from "./Icon"
import { AnimatedInViewProps } from "./ui/AnimatedInView"
import { Variants } from "motion/react"
import { MotionArticle } from "../utils/lazy-ui"

type Accent = "white" | "slate" | "black"

export interface PricingCardProps extends Partial<AnimatedInViewProps<"article">> {
  plan: string
  tagline?: string
  price: string
  description: string
  features: string[]
  accent?: Accent
  ctaLabel?: string
  icon: string
  variants?: Variants
}

const palette: Record<
  Accent,
  {
    cardBg?: string
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
    cardBg: "bg-gradient-to-tr from-gray-700 to-gray-900",
    cardText: "text-white",
    iconBg: "bg-slate-700",
    priceText: "text-white",
    checkText: "text-slate-900",
    btnBg: "bg-white",
    btnText: "text-slate-800",
  },
}

export function PricingCard({ plan, tagline, price, description, features, accent = "slate", ctaLabel = "Get started", icon, variants }: PricingCardProps) {
  const c = palette[accent]

  return (
    <MotionArticle
      variants={variants}
      className={clsx("flex max-w-sm min-w-2xs [flex:1_0_0px] flex-col gap-4 rounded-3xl border border-slate-400 p-8 shadow-lg md:gap-6", c.cardBg, c.cardText)}
    >
      <header className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* tagline + icon row */}
        <div className="flex items-center gap-4 md:gap-2.5">
          <div
            className={clsx(
              "flex aspect-square max-h-16 min-h-13 max-w-16 min-w-13 items-center justify-center rounded-xl border border-slate-400 text-lg",
              c.iconBg
            )}
          >
            <Icon name={icon} height={40} width={40} className="p-1" />
          </div>

          <div className="flex flex-col gap-1 py-2">
            <p className={clsx("min-w-38 text-sm leading-none tracking-tight", accent === "black" && "text-gray-300")}>{tagline}</p>
            <h3 className="text-md font-semibold tracking-wide">{plan}</h3>
          </div>
        </div>

        {/* Description */}
        <p className={clsx("line-clamp-3 text-sm leading-relaxed", accent === "black" ? "text-gray-300" : "text-slate-600")}>{description}</p>

        {/* Price */}
        <div>
          <p className={clsx("text-xs tracking-wide uppercase", accent === "black" ? "text-gray-400" : "text-slate-500")}>Starting at</p>
          <p className={clsx("text-3xl font-medium", c.priceText)}>{price}</p>
        </div>
      </header>

      <section className="flex flex-col gap-3">
        <p className="text-sm font-semibold">What&apos;s included</p>
        <ul className="flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-nowrap">
              <Icon name="check" height={20} width={20} className={clsx("check-icon", c.checkText)} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <button
        type="button"
        className={clsx(
          "bubble-hover button-shadow mt-auto rounded-full px-6 py-3 text-sm font-medium transition hover:translate-y-0.5 hover:cursor-pointer",
          c.btnBg,
          c.btnText
        )}
      >
        {ctaLabel}
      </button>
    </MotionArticle>
  )
}
