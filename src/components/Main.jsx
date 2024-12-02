import { languages } from "../languages/languages";
import Card from "../components/Card";
/* Export Main */
export default function Main({ id, title, description }) {
  return (
    <>
      {languages.map((item) => (
        <ul className="d-flex gap-3">
          <li>
            <button className="btn btn-primary">{item.title}</button>
          </li>
        </ul>
      ))}
      {languages.map((item) => (
        <Card key={item.id} tile={item.title} description={item.description} />
      ))}
    </>
  );
}
