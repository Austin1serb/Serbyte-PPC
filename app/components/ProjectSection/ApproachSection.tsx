"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { H3, Text } from "@/app/ui/Elements"
import { HeaderText } from "@/app/ui/HeaderText"
import TiltedWrapper from "@/app/ui/TiltedWrapper"
import { phases } from "./projectData"
import Image from "next/image"

export interface Phase {
  id: number
  title: string
  subtitle: string
  description: string
  details: string[]
  icon: string
  color: string
  bgGradient: string
}

export const ApproachSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1)
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null)

  const currentPhase = phases.find((phase) => phase.id === activePhase) || phases[0]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="inside-container-projects">
        <HeaderText title="The Approach." titleHighlight="See how we did it." />

        {/* Phase Navigation - Tab Style */}
        <div className="relative mb-16">
          {/* Tab Container with Clip Path Background */}
          <div className="relative rounded-2xl p-2">
            {/* Animated Background for Active Tab */}
            <motion.div
              className="absolute top-2 bottom-2 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl [box-shadow:var(--button-shadow)]"
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
            <div className="relative grid grid-cols-5 gap-2">
              {phases.map((phase) => (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  onHoverStart={() => setHoveredPhase(phase.id)}
                  onHoverEnd={() => setHoveredPhase(null)}
                  className={`relative p-4 rounded-xl transition-all duration-300 text-center group z-10 ${
                    activePhase === phase.id ? "text-slate-200" : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Image src={phase.icon} alt={phase.title} width={50} height={50} />
                    <span className="text-xs font-semibold mb-1">Phase {phase.id}</span>
                    <span className="text-xs leading-tight opacity-75">{phase.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
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
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Image src={currentPhase.icon} alt={currentPhase.title} width={100} height={100} />

                <div>
                  <H3 className="text-3xl font-bold text-slate-900 mb-2">{currentPhase.title}</H3>
                  <Text className="text-lg text-slate-600 font-medium">{currentPhase.subtitle}</Text>
                </div>
              </div>

              <Text className="text-xl leading-relaxed text-slate-700">{currentPhase.description}</Text>

              <div className="space-y-3">
                {currentPhase.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-slate-900 rounded-full mt-3 flex-shrink-0" />
                    <Text className="text-slate-600 leading-relaxed">{detail}</Text>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Interactive Visual */}
          <div className="relative">
            <TiltedWrapper
              containerHeight="500px"
              contentHeight="450px"
              contentWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              className="w-full"
              contentClassName="w-full"
            >
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className={`w-full h-full ${currentPhase.bgGradient} rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden border`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 border">
                  <div className="absolute top-4 right-4 w-32 h-32 border-2 border-current rounded-full" />
                </div>

                <Image src={currentPhase.icon} alt={currentPhase.title} width={100} height={100} className="text-8xl mb-6" />
                <H3 className="text-2xl font-bold text-slate-900 mb-4">Phase {currentPhase.id}</H3>
                <Text className="text-lg text-slate-700 max-w-sm">{currentPhase.subtitle}</Text>
              </motion.div>
            </TiltedWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
