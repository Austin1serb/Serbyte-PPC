import clsx from "clsx"
import { SingleFAQ } from "./SingleFAQ"
export interface FAQ {
  index: number
  question: string
  answer: React.ReactNode
}
export const FAQTable: React.FC<{ className?: string; faqData: FAQ[] }> = ({ className, faqData }) => {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      {faqData.map((faq, index) => (
        <SingleFAQ key={faq.question + index} {...faq} index={index} />
      ))}
    </div>
  )
}
