import clsx from "clsx"
import { SingleFAQ } from "./SingleFAQ"
const faqs = [
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity. A simple project might take 2-3 weeks, while more comprehensive designs can take 1-2 months. I will provide a specific estimate after our initial consultation.",
  },
]

export const FAQTable: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      {faqs.map((faq, index) => (
        <SingleFAQ key={faq.question + index} {...faq} index={index} />
      ))}
    </div>
  )
}
