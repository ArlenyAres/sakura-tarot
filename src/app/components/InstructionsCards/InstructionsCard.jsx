
export default function InstructionsCard({ title, description }) {
  return (
    <section className="card card-side bg-beige shadow-xl border-dashed border-4 border-purple-dark">
      <div className="card-body px-10">
        <h2 className="card-title pb-2 text-purple-dark">{title}</h2>
        <p className="text-purple-text">{description}</p>
      </div>
    </section>
  )
}