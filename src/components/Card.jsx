export default function Card({ id, title, description }) {
  return (
    <>
      <div className="card w-50">
        <div className="card-body" key={id}>
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
}
