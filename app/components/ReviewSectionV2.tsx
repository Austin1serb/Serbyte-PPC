import { ReviewGridV2 } from "./ReviewGridV2"

export const ReviewSectionV2: React.FC = () => {
  return (
    <section className="inside-container">
      <div className="flex flex-col gap-6">
        <h2 className="h2-display">
          <span className="text-slate-500">Hear from what our</span> <br />
          clients have to say.
        </h2>
      </div>
      <ReviewGridV2 />
    </section>
  )
}
