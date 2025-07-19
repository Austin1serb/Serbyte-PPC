"use client"
import { useUI } from "@react-zero-ui/core"

interface ApproachTabsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  phase: number
}
export const ApproachTabsButton: React.FC<ApproachTabsButtonProps> = ({ phase, ...props }) => {
  const [, setPhase] = useUI<"1" | "2" | "3" | "4" | "5">("phase", "1")

  return <button {...props} onClick={() => setPhase(phase.toString() as "1" | "2" | "3" | "4" | "5")}></button>
}
