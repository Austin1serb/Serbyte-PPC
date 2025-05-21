import { AnnotationData } from "./Annotation"

/**
 * All coords are percentages of the ORIGINAL image (0-100).
 * start/end ∈ 0-1 = scroll-progress window in which the tooltip is visible.
 */
export const bespokeAnnotations: AnnotationData[] = [
  {
    id: "hero",
    rect: { x: 7.5, y: 0, w: 85, h: 12 },
    text: "Navigation Bar",
    start: 0.15,
    end: 0.18,
    className: "translate-x-40",
  },
  {
    id: "social-proof",
    rect: { x: 53, y: 0, w: 39, h: 6 },
    text: "Contact Info",
    start: 0.25,
    end: 0.28,
  },
] as const
