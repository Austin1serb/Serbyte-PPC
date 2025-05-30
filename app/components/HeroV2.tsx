import { ActivityDot } from "./ActivityDot"
import { AnimatedElement } from "./AnimatedElement"
import { CallToActionButton } from "./CallToActionButton"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-32">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          <AnimatedElement
            element="span"
            delay={0.6}
            className="inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg"
          >
            <ActivityDot /> Available for April &apos;25
          </AnimatedElement>

          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              Design
            </AnimatedElement>{" "}
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block">
              that
            </AnimatedElement>
            <br />
            <AnimatedElement element="span" delay={0.4} offsetPx={20} fadeDirection="left" className="inline-block text-slate-700">
              delivers results.
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="max-w-xs text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base">
            <strong className="font-semibold text-slate-900">Strategic design that drives growth, not just looks good.</strong> I create everything your brand
            needs to attract customers and turn them into sales.
          </AnimatedElement>

          <CallToActionButton />
        </div>
        {/* Don't remove this span */}
        <span data-stack-target-id className="xs:ml-[8%] mt-20 ml-[4%] [flex:1_0_0px] sm:mt-10 sm:ml-0 md:ml-[8%]" />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
