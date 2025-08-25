import { H2 } from "@/app/ui/Elements"
import { FAQTable } from "./FAQTable"
import { NotSureCard } from "./NotSureCard"
import { AnimatedH2 } from "../ui/AnimatedH2"
export const FAQSection: React.FC = () => {
  return (
    <section className="inside-container flex-col border-t border-gray-200 md:gap-8 lg:flex-row">
      <div className="flex flex-col gap-12 md:[flex:1.5_0_0px] md:gap-16">
        <AnimatedH2>
          Your questions <br /> <span className="text-slate-500">answered.</span>
        </AnimatedH2>
        <FAQTable />
      </div>

      <NotSureCard className="md:[flex:1_0_0px]" />
    </section>
  )
}
