"use client"
import * as motion from "motion/react-m"
import { useState } from "react"
import Image from "next/image"
import { AnimatePresence } from "motion/react"
import { H3, Text } from "@/app/ui/Elements"
import TiltedWrapper from "@/app/ui/TiltedWrapper"
import { Phase } from "./ApproachSection"

export const ApproachTabs: React.FC<{ phases: Phase[] }> = ({ phases }) => {
  const [activePhase, setActivePhase] = useState<number>(1)
  const currentPhase = phases.find((phase) => phase.id === activePhase) || phases[0]

  return (
    <div className="flex flex-col gap-4">
      {/* Phase Navigation - Tab Style */}
      <div className="relative rounded-2xl md:p-2">
        {/* Animated Background for Active Tab */}
        <motion.div
          className="absolute inset-2 bg-gradient-to-br from-slate-500 to-slate-900 rounded-xl [box-shadow:var(--button-shadow)]"
          animate={{
            left: `${((activePhase - 1) / phases.length) * 100}%`,
            width: `${100 / phases.length}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          layoutId="activeTabBackground"
        />

        {/* Tab Buttons */}
        <div className="relative grid grid-cols-5">
          {phases.map((phase) => (
            <motion.button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`relative p-4 rounded-xl transition-all duration-300 text-center group z-1 ${
                activePhase === phase.id ? "text-slate-200" : "text-slate-600 hover:text-slate-800"
              }`}
            >
              <div className="flex flex-col items-center ">
                <div>
                  <Image src={phase.icon} alt={phase.title} width={50} height={50} />
                  <span className="text-xs font-semibold mb-1 text-nowrap">Phase {phase.id}</span>
                </div>
                <span className="text-xs leading-tight opacity-75 sm:text-nowrap">{phase.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Phase Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Phase Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 md:space-y-6"
          >
            <div className="flex items-center gap-4 ">
              <Image src={currentPhase.icon} alt={currentPhase.title} width={100} height={100} />

              <div>
                <H3 className="mb-2">{currentPhase.title}</H3>
                <Text>{currentPhase.subtitle}</Text>
              </div>
            </div>

            <Text size="lg" className="text-slate-700">
              {currentPhase.description}
            </Text>

            <div className="space-y-3 hidden md:block">
              {currentPhase.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-slate-900 rounded-full  flex-shrink-0" />
                  <Text className="text-slate-600 leading-relaxed">{detail}</Text>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right: Interactive Visual */}
        <motion.div
          key={activePhase + 1}
          initial={{ opacity: 0, x: -20, scaleX: 0.5 }}
          animate={{ opacity: 1, x: 0, scaleX: 1 }}
          exit={{ opacity: 0, x: 20, scaleX: 0.5 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="relative w-full h-full min-h-[300px] max-w-[500px] mx-auto"
        >
          <TiltedWrapper height="100%" width="100%" scaleOnHover={1.05} rotateAmplitude={8} className="w-full h-full [box-shadow:var(--button-shadow)]">
            {currentPhase.feature}
          </TiltedWrapper>
        </motion.div>
      </div>
    </div>
  )
}
