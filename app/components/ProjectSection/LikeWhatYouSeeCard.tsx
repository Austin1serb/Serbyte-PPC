import { NotSureCard } from "../FAQ/NotSureCard"

export const LikeWhatYouSeeCard: React.FC = () => {
  return (
    <section className="border-t border-gray-200">
      <div className="inside-container-small">
        <NotSureCard projectsPage className="py-12" />
      </div>
    </section>
  )
}
