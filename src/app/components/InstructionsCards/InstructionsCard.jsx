
export default function InstructionsCard({ title, image, description, altText }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl ">
      <figure>
        <img
          src={image}
          alt={altText}
          height={320}
          width={320}
          />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
