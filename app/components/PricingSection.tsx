import { PricingCard } from "./PricingCard"
import { ActivityDot } from "./ui/ActivityDot"
import { FinancingCard } from "./FinancingCard"
import { Icon } from "./Icon"
import { H2, H3, Text, Typography } from "../ui/Elements"
import { CalIcon } from "../icons/Cal.icon"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { BlackButton } from "./ui/BlackButton"
import { MotionDiv, MotionLi, MotionUl } from "@/app/utils/lazy-ui"

const listItems = [
  {
    title: "Discovery & Concept",
    description: "We start with a quick call. I research your brand and deliver a tailored design concept before you even commit.",
    icon: <Icon name="phone" height={18} width={18} className="rotate-6" strokeWidth={2.5} />,
  },
  {
    title: "Strategy & Packages",
    description: "If you love the direction, I dive deeper - building a strategy around your needs and offering clear package options.",
    icon: <Icon name="boxes" height={18} width={18} strokeWidth={2.5} />,
  },
  {
    title: "Build & Launch",
    description: "Once you choose your package, I design and develop your project - typically delivering everything within one month.",
    icon: <Icon name="rocket" height={18} width={18} strokeWidth={2.5} />,
  },
]

const month = new Date().toLocaleString("default", { month: "long" })

const features = [
  "Unlimited design requests",
  "90 free after care",
  "90 days free hosting",
  "Lifetime updates",
  "No lock-in",
  "Cancel anytime",
  "Own your data",
  "No contract required",
]
const parent: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
}
const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 10 } },
}

export const PricingSection: React.FC = () => {
  return (
    <section className="inside-container bg-white" id="pricing">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <AnimatedH2 className="[flex:1_0_0px]">
          Simple pricing. <br />
          <span className="text-slate-500">Standout designs.</span>
        </AnimatedH2>
        <Typography as="div" size="lg" className="max-w-md [flex:0.5_0_0px]">
          <strong className="font-semibold text-slate-900">Clear costs, no hidden fees.</strong> Select from monthly subscriptions or individual project rates.
        </Typography>
      </div>

      <MotionUl
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={parent}
        className="flex flex-col items-center justify-between gap-12 sm:flex-row lg:gap-16"
      >
        {listItems.map((item, i) => (
          <MotionLi key={item.title} variants={child}>
            <Typography as="div" size="sm" className="relative flex max-w-3xs flex-col gap-2">
              <h3 className="flex items-center gap-1 font-medium text-black">
                <span>{item.icon}</span> {item.title}
              </h3>
              <p className="text-slate-700">{item.description}</p>
              <span className="absolute top-1/2 -right-16 -translate-x-1/2 -translate-y-1/2 text-9xl font-medium text-black opacity-10">{i + 1}</span>
            </Typography>
          </MotionLi>
        ))}
      </MotionUl>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="relative flex [flex:1_0_0px] flex-col justify-end gap-6 rounded-xl bg-white p-6 md:max-w-md md:p-8">
            <FinancingCard />
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg">
              <ActivityDot /> 1 spot left for {month}
            </span>
            <H3>Get Started Today</H3>
            <Text size="sm">Full-service web design & development, SEO, and marketing.</Text>
          </div>

          <div className="relative flex [flex:1.5_0_0px] flex-col gap-6 rounded-xl bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <H3>Unlimited Design</H3>
              <Text size="sm">One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.</Text>
            </div>
            <hr className="border-gray-200" />
            <H3>Included in all plans</H3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm leading-4 font-medium">
              {features.map((feature, index) => (
                <li key={feature + index} className="flex items-center gap-1">
                  <Icon name="check" className="h-5 w-5 text-slate-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-6">
              <BlackButton>Book a Discovery Call</BlackButton>
              <CalIcon className="h-20 w-20 text-gray-500" />
            </div>
          </div>
        </div>
        <H2 className="my-8 w-full border-b border-gray-200 pb-4 text-center">Packages</H2>
        <MotionDiv
          initial="hidden"
          whileInView="show"
          // TODO figure out margin
          viewport={{ once: true, margin: "-100px" }}
          variants={parent}
          className="relative flex flex-row flex-wrap items-end justify-center gap-8"
        >
          <PricingCard
            plan="Essentials"
            tagline="For small businesses & individuals"
            price="$3,000"
            description="High-performance business card site with basic SEO, fast load times, and professional design."
            features={["2-3 Page Website", "Branding & Custom UI", "Next.js + Instant Load", "Google Search Optimization", "Optimized Copywriting"]}
            icon={"circle"}
            accent="white"
            variants={child}
          />

          <PricingCard
            plan="Growth"
            tagline="For businesses needing more than a website"
            price="$5,000"
            description="Fully optimized site with advanced SEO, strategic content, and level I integrated software."
            features={[
              "Everything from Essentials +",
              "Up to 10 Pages",
              "Advanced SEO",
              "Blog & Content Strategy",
              "API & 3rd-party Integrations",
              "Level I Integrated System",
            ]}
            icon={"square"}
            accent="slate"
            variants={child}
          />

          <PricingCard
            plan="Enterprise"
            tagline="Website + fully custom SaaS solution"
            price="$10,000"
            description="Scalable web & software solution for businesses needing automation, data management, workflows."
            features={[
              "Everything from Growth +",
              "Up to 50 Pages",
              "Complete Brand Package",
              "Full Admin Dashboard",
              "Contact & Chat Automation",
              "Custom Management System",
              "Level II Integrated System",
            ]}
            icon={"cube"}
            accent="black"
            variants={child}
          />
        </MotionDiv>
      </div>
    </section>
  )
}
