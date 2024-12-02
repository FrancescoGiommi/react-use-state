import { languages } from "../languages/languages";

/* Export Main */
export default function Main({ id, title, description }) {
  return (
    <>
      <ul className="d-flex gap-3">
        <li>
          <button className="btn btn-primary">{languages[0].title}</button>
        </li>
        <li>
          <button className="btn btn-primary">{languages[1].title}</button>
        </li>
        <li>
          <button className="btn btn-primary">{languages[2].title}</button>
        </li>
        <li>
          <button className="btn btn-primary">{languages[3].title}</button>
        </li>
        <li>
          <button className="btn btn-primary">{languages[4].title}</button>
        </li>
        <li>
          <button className="btn btn-primary">{languages[5].title}</button>
        </li>
      </ul>

      <div className="card w-50 mb-3">
        <div className="card-body" key={languages[0].id}>
          <h2 className="card-title">{languages[0].title}</h2>
          <p className="card-text">{languages[0].description}</p>
        </div>
      </div>
      <div className="card w-50 mb-3">
        <div className="card-body" key={languages[1].id}>
          <h2 className="card-title">{languages[1].title}</h2>
          <p className="card-text">{languages[1].description}</p>
        </div>
      </div>
      <div className="card w-50 mb-3">
        <div className="card-body" key={languages[2].id}>
          <h2 className="card-title">{languages[2].title}</h2>
          <p className="card-text">{languages[2].description}</p>
        </div>
      </div>
      <div className="card w-50 mb-3">
        <div className="card-body" key={languages[3].id}>
          <h2 className="card-title">{languages[3].title}</h2>
          <p className="card-text">{languages[3].description}</p>
        </div>
      </div>
      <div className="card w-50 mb-3">
        <div className="card-body" key={languages[4].id}>
          <h2 className="card-title">{languages[4].title}</h2>
          <p className="card-text">{languages[4].description}</p>
        </div>
      </div>
      <div className="card w-50 mb-3">
        <div className="card-body" key={languages[5].id}>
          <h2 className="card-title">{languages[5].title}</h2>
          <p className="card-text">{languages[5].description}</p>
        </div>
      </div>
    </>
  );
}
