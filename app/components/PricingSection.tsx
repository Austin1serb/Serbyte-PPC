import { PricingCard } from "./PricingCard"
import circleIcon from "../images/half-circle.png"
import squareIcon from "../images/square.png"
import cubeIcon from "../images/cube.png"
import { ActivityDot } from "./ActivityDot"
import { FinancingCard } from "./FinancingCard"
import { Icon } from "./Icon"
import * as motion from "motion/react-client"

const listItems = [
  {
    title: "Discovery & Concept",
    description: "We start with a quick call. I research your brand and deliver a tailored design concept before you even commit.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={17}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-6"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  },
  {
    title: "Strategy & Packages",
    description: "If you love the direction, I dive deeper - building a strategy around your needs and offering clear package options.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
        <path d="m7 16.5-4.74-2.85" />
        <path d="m7 16.5 5-3" />
        <path d="M7 16.5v5.17" />
        <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
        <path d="m17 16.5-5-3" />
        <path d="m17 16.5 4.74-2.85" />
        <path d="M17 16.5v5.17" />
        <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
        <path d="M12 8 7.26 5.15" />
        <path d="m12 8 4.74-2.85" />
        <path d="M12 13.5V8" />
      </svg>
    ),
  },
  {
    title: "Build & Launch",
    description: "Once you choose your package, I design and develop your project — typically delivering everything within one month.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
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
    <section className="inside-container" id="pricing">
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
      <div className="flex flex-col gap-2 rounded-2xl bg-gray-100 p-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-full relative flex flex-col justify-end gap-6 rounded-xl bg-white p-6 md:max-w-md md:p-8">
            <FinancingCard />
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg">
              <ActivityDot /> 1 spot left for {month}
            </span>
            <h3 className="h3-display text-black">Get Started Today</h3>
            <p className="body-display">Full-service web design & development, SEO, and marketing.</p>
          </div>

          <div className="flex-1-5 flex flex-col gap-6 rounded-xl bg-white p-6 md:p-8">
            <div className="flex flex-col gap-4">
              <h3 className="h3-display text-black">Unlimited Design</h3>
              <p className="body-display">One flat monthly rate for unlimited design requests. Ideal for ongoing design requirements.</p>
            </div>
            <hr />
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
        <motion.div
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
          className="flex flex-row flex-wrap items-end justify-center gap-8 pt-12"
        >
          <PricingCard
            plan="Essentials"
            tagline="For small businesses & individuals"
            price="$2,000"
            description="High-performance business card site with basic SEO, fast load times, and professional design."
            features={["2-3 Page Website", "Branding & Custom UI", "Next.js + Instant Load", "Google Search Optimization", "Optimized Copywriting"]}
            icon={circleIcon}
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
            icon={squareIcon}
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
            icon={cubeIcon}
            accent="black"
            variants={child}
          />
        </motion.div>
      </div>
    </section>
  )
}
