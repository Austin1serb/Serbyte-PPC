import { H2 } from "@/app/ui/Elements"
import { FAQTable } from "./FAQTable"
import { NotSureCard } from "./NotSureCard"
export const FAQSection: React.FC = () => {
  return (
    <section className="inside-container border-t border-gray-200">
      <H2>
        Your questions <br /> <span className="text-slate-500">answered.</span>
      </H2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <FAQTable />
        <NotSureCard />
      </div>
    </section>
  )
}
