import { H2 } from "../ui/Elements"
import { ReviewGridV2 } from "./ReviewGridV2"

export const ReviewSectionV2: React.FC = () => {
  return (
    <section className="inside-container max-md:px-0">
      <div className="flex flex-col gap-6 max-md:px-5.5">
        <H2>
          <span className="text-slate-500">Hear from what our</span> <br />
          clients have to say.
        </H2>
      </div>
      <ReviewGridV2 />
    </section>
  )
}
