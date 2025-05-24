import { AnnotationData } from "./Annotation"

/**
 * All coords are percentages of the ORIGINAL image (0-100).
 * start/end ∈ 0-1 = scroll-progress window in which the tooltip is visible.
 */
export const bespokeAnnotations: AnnotationData[] = [
  {
    id: "call-to-action",
    rect: { x: 78.8, y: 4, w: 12.45, h: 6 },
    text: "Clear Calls to Action",
    start: 0.15,
    end: 0.19,
    className: "",
  },
  {
    id: "call-to-action-2",
    rect: { x: 40, y: 48.56, w: 17.8, h: 6.6 },
    text: "Clear Calls to Action",
    start: 0.15,
    end: 0.19,
    className: "translate-x-40 -translate-y-26 rounded-full rounded-tl-full! rounded-bl-none!",
  },
  {
    id: "social-proof",
    rect: { x: 20.5, y: 32.5, w: 27, h: 6.5 },
    text: "Social Proof",
    start: 0.25,
    end: 0.28,
    className: "translate-x-40 brightness-100",
  },
  {
    id: "key-words",
    rect: { x: 20.5, y: 37.5, w: 36, h: 10.5 },
    text: "Target Key Words",
    start: 0.35,
    end: 0.37,
    className: "translate-x-40 brightness-100",
  },
] as const
