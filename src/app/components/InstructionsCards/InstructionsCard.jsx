
export default function InstructionsCard({ title, description }) {
  return (
    <section className="card card-side bg-beige shadow-xl border-dashed border-4 border-purple-dark">
      <div className="card-body px-10">
        <h2 className="card-title pb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}
