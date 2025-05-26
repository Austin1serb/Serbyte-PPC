import clsx from "clsx"
import { SingleFAQ } from "./SingleFAQ"
import { faqs } from "@/config/siteConfig"

export const FAQTable: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      {faqs.map((faq, index) => (
        <SingleFAQ key={faq.question + index} {...faq} index={index} />
      ))}
    </div>
  )
}
