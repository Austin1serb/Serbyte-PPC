import { PricingCard } from "./PricingCard"
import { ActivityDot } from "./ActivityDot"
import { FinancingCard } from "./FinancingCard"
import { Icon } from "./Icon"
import * as m from "motion/react-m"

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
    description: "Once you choose your package, I design and develop your project — typically delivering everything within one month.",
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

const child = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 10 } },
}

export const PricingSection: React.FC = () => {
  return (
    <section className="inside-container bg-white" id="pricing">
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <h2 className="h2-display flex-full">
          Simple pricing. <br />
          <span className="text-slate-500">Standout designs.</span>
        </h2>
        <p className="body-display-lg flex-half max-w-md">
          <strong>Clear costs, no hidden fees.</strong> Select from monthly subscriptions or individual project rates.{" "}
        </p>
      </div>

      <ul className="flex flex-col justify-between gap-12 sm:flex-row lg:gap-16">
        {listItems.map((item) => (
          <li key={item.title} className="body-display flex max-w-3xs flex-col gap-2">
            <h3 className="flex items-center gap-1 font-medium text-black">
              <span className="text-slate-500">{item.icon}</span> {item.title}
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-full relative flex flex-col justify-end gap-6 rounded-xl bg-white p-6 md:max-w-md md:p-8">
            <FinancingCard />
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg">
              <ActivityDot /> 1 spot left for {month}
            </span>
            <h3 className="h3-display text-black">Get Started Today</h3>
            <p className="body-display">Full-service web design & development, SEO, and marketing.</p>
          </div>

          <div className="flex-1-5 flex flex-col gap-6 rounded-xl bg-white p-6 md:p-8 relative">
            <div className="flex flex-col gap-4">
              <h3 className="h3-display text-black">Unlimited Design</h3>
              <p className="body-display">One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.</p>
            </div>
            <hr className="border-gray-200" />
            <h3 className="h3-display text-black">Included in all plans</h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-4 text-sm leading-4 font-medium">
              {features.map((feature, index) => (
                <li key={feature + index} className="flex items-center gap-1">
                  <Icon name="check" className="check-icon text-slate-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button type="button" className="bubble-hover button-shadow mt-6 w-fit rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition">
              Book a Discovery Call
            </button>
          </div>
        </div>
        <h3 className="h3-display w-full text-center my-8 border-b border-gray-200 pb-4">Packages</h3>
        <m.div
          initial="hidden"
          whileInView="show"
          // TODO figure out margin
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 1, y: 0 },
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.15,
              },
            },
          }}
          className="flex flex-row flex-wrap items-end justify-center gap-8 relative"
        >
          <PricingCard
            plan="Essentials"
            tagline="For small businesses & individuals"
            price="$2,000"
            description="High-performance business card site with basic SEO, fast load times, and professional design."
            features={["2-3 Page Website", "Branding & Custom UI", "Next.js + Instant Load", "Google Search Optimization", "Optimized Copywriting"]}
            icon={"circle"}
            accent="white"
            variants={child}
          />

          <PricingCard
            plan="Growth"
            tagline="For businesses needing more than a website"
            price="$3,500"
            description="Fully optimized site with advanced SEO, strategic content, and level I integrated software."
            features={[
              "Everything from Basic +",
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
              "Everything from Pro +",
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
        </m.div>
      </div>
    </section>
  )
}
