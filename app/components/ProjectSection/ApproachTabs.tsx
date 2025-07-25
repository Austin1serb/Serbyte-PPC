"use client"
import Image from "next/image"
import { H3, Text } from "@/app/ui/Elements"
import TiltedWrapper from "@/app/ui/TiltedWrapper"
import { Phase } from "./ApproachSection"
import { useUI } from "@react-zero-ui/core"

const TAB_ACTIVE_CLASS: Record<string, string> = {
  "1": "phase-1:text-slate-200",
  "2": "phase-2:text-slate-200",
  "3": "phase-3:text-slate-200",
  "4": "phase-4:text-slate-200",
  "5": "phase-5:text-slate-200",
}

const PANEL_VISIBLE_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:opacity-100 phase-1:pointer-events-auto phase-1:relative",
  "2": "phase-2:opacity-100 phase-2:pointer-events-auto phase-2:relative",
  "3": "phase-3:opacity-100 phase-3:pointer-events-auto phase-3:relative",
  "4": "phase-4:opacity-100 phase-4:pointer-events-auto phase-4:relative",
  "5": "phase-5:opacity-100 phase-5:pointer-events-auto phase-5:relative",
}

const PANEL_ANIMATION_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:translate-x-0 phase-1:delay-200",
  "2": "phase-2:translate-x-0 phase-2:delay-200",
  "3": "phase-3:translate-x-0 phase-3:delay-200",
  "4": "phase-4:translate-x-0 phase-4:delay-200",
  "5": "phase-5:translate-x-0 phase-5:delay-200",
}

const PANEL_RIGHT_ANIMATION_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:animate-fade-in phase-1:scale-x-100 phase-1:duration-500 phase-1:delay-200",
  "2": "phase-2:animate-fade-in phase-2:scale-x-100 phase-2:duration-500 phase-2:delay-200",
  "3": "phase-3:animate-fade-in phase-3:scale-x-100 phase-3:duration-500 phase-3:delay-200",
  "4": "phase-4:animate-fade-in phase-4:scale-x-100 phase-4:duration-500 phase-4:delay-200",
  "5": "phase-5:animate-fade-in phase-5:scale-x-100 phase-5:duration-500 phase-5:delay-200",
}
const PANEL_DETAILS_ANIMATION_CLASS: Record<PhaseId, string> = {
  "1": "phase-1:[animation-delay:calc(var(--d,1)*100ms+200ms)] phase-1:animate-fade-in ",
  "2": "phase-2:[animation-delay:calc(var(--d,2)*100ms+200ms)] phase-2:animate-fade-in ",
  "3": "phase-3:[animation-delay:calc(var(--d,3)*100ms+200ms)] phase-3:animate-fade-in ",
  "4": "phase-4:[animation-delay:calc(var(--d,4)*100ms+200ms)] phase-4:animate-fade-in ",
  "5": "phase-5:[animation-delay:calc(var(--d,1)*100ms+200ms)] phase-5:animate-fade-in ",
}

type PhaseId = "1" | "2" | "3" | "4" | "5"

export const ApproachTabs: React.FC<{ phases: Phase[] }> = ({ phases }) => {
  if (phases.length > 5) throw new Error("ApproachTabs max 5 phases")

  const [, setPhase] = useUI<PhaseId>("phase", "1")

  const tabWidthPct = 100 / phases.length

  return (
    <div className="flex flex-col gap-4">
      {/* Phase Navigation - Tab Style */}
      <div className="relative rounded-2xl md:py-2">
        {/* Animated Background for Active Tab */}
        <div
          className={
            "absolute inset-2 left-0 rounded-xl bg-gradient-to-br from-slate-500 to-slate-900 [box-shadow:var(--button-shadow)]" +
            " phase-1:translate-x-[0%] phase-2:translate-x-[100%] phase-3:translate-x-[200%] phase-4:translate-x-[300%] phase-5:translate-x-[400%] transition-transform duration-300 ease-in-out"
          }
          style={{
            width: `${tabWidthPct}%`,
          }}
        />

        {/* Tab Buttons */}
        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${phases.length}, minmax(0, 1fr))` }}>
          {phases.map((phase) => {
            const phaseId = String(phase.id) as PhaseId
            const tw = TAB_ACTIVE_CLASS[phaseId]
            return (
              <button
                key={phase.id}
                onClick={() => setPhase(phaseId)}
                className={`group relative z-1 rounded-xl p-4 text-center transition-all duration-300 ${tw}`}
              >
                <div className="flex flex-col items-center">
                  <div>
                    <Image src={phase.icon} alt={phase.title} width={50} height={50} />
                    <span className="mb-1 text-xs font-semibold text-nowrap">Phase {phase.id}</span>
                  </div>
                  <span className="text-xs leading-tight opacity-75 sm:text-nowrap">{phase.title}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Phase Content */}
      <div className="relative min-h-[320px] lg:max-h-[400px]">
        {phases.map((phase) => {
          const pid = String(phase.id) as PhaseId
          const tw = PANEL_VISIBLE_CLASS[pid]
          const animation = PANEL_ANIMATION_CLASS[pid]
          const animation2 = PANEL_RIGHT_ANIMATION_CLASS[pid]
          const detailsAnimation = PANEL_DETAILS_ANIMATION_CLASS[pid]
          return (
            <div
              key={pid}
              className={`pointer-events-none absolute inset-0 grid translate-x-5 grid-cols-1 items-start gap-12 opacity-0 transition-all duration-300 ease-in-out lg:grid-cols-2 ${tw} ${animation}`}
            >
              {/* Left */}
              <div className="space-y-2 md:space-y-6">
                <div className="flex items-center gap-4">
                  <Image src={phase.icon} alt={phase.title} width={100} height={100} />
                  <div>
                    <H3 className="mb-2">{phase.title}</H3>
                    <Text>{phase.subtitle}</Text>
                  </div>
                </div>
                <Text size="lg" className="text-slate-700">
                  {phase.description}
                </Text>
                <div className="hidden space-y-3 md:block">
                  {phase.details.map((detail, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 opacity-0 ${detailsAnimation}`}
                      style={{ ["--d" as keyof React.CSSProperties]: i + 1 } as React.CSSProperties}
                    >
                      <div className="aspect-square h-2 w-2 rounded-full bg-slate-900" />
                      <Text className="leading-relaxed text-slate-600">{detail}</Text>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right */}
              <div className={`relative aspect-[5/3] w-full scale-x-50 opacity-0 delay-300 ${animation2} transition-all duration-300 ease-in-out `}>
                <TiltedWrapper
                  height="100%"
                  width="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={8}
                  className="h-full w-full transform-gpu [box-shadow:var(--button-shadow)]  "
                >
                  <div className="relative h-full w-full">{phase.feature}</div>
                </TiltedWrapper>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
