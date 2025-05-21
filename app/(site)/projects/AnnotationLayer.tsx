"use client"
import { MotionValue } from "motion/react"
import { bespokeAnnotations } from "./bespoke.annotations"
import { Annotation } from "./Annotation"

interface Props {
  progress: MotionValue<number>
}

export const AnnotationLayer = ({ progress }: Props) => (
  <>
    {bespokeAnnotations.map((a) => (
      <Annotation key={a.id} data={a} progress={progress} />
    ))}
  </>
)
