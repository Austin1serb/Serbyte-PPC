import { FAQTable } from "./FAQTable"
import { NotSureCard } from "./NotSureCard"
export const FAQSection: React.FC = () => {
  return (
    <section className="inside-container">
      <h2 className="h2-display">
        Your questions <br /> <span className="text-slate-500">answered.</span>
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <FAQTable />
        <NotSureCard />
      </div>
    </section>
  )
}
