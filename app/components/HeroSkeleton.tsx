import { ActivityDot } from "./ui/ActivityDot"

export const HeroSkeleton = () => {
  return (
    <section className="mx-auto max-w-6xl pt-32">
      <div className="inside relative flex gap-8 px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg">
            <ActivityDot /> Available for ***** &apos;25
          </span>

          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[0.9] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <span className="inline-block">Design</span> <span className="inline-block">that</span>
            <br />
            <span className="inline-block text-slate-700">delivers</span> <span className="inline-block text-slate-500">results.</span>
          </h1>

          <p className="max-w-xs text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base">
            <strong className="font-semibold text-slate-900">Strategic design that drives growth, not just looks good.</strong> I create everything your brand
            needs to attract customers and turn them into sales.
          </p>

          <button className="group bubble-hover active inline-flex w-max items-center gap-2 rounded-full bg-black px-3 py-2.5 text-base font-medium tracking-tight text-white shadow-xl shadow-black/20">
            <div className="relative flex items-center gap-1">
              {/* Avatar */}
              <div className="relative h-7 w-7 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gray-200" />
              </div>
            </div>
            Book a call with me
          </button>
        </div>
        {/* Don't remove this span */}
        <span data-stack-target-id />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
