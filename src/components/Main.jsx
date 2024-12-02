import { useState } from "react";
import { languages } from "../languages/languages";
import Card from "../components/Card";

/* Export Main */
export default function Main() {
  const [visible, setVisible] = useState(false);

  const isHidden = true;

  return (
    <>
      <main>
        {/* Generate card with Map */}
        {languages.map((item) => (
          <ul className="d-flex gap-3">
            <li>
              <button className="btn btn-primary" key={item.id}>
                {item.title}
              </button>
            </li>
          </ul>
        ))}

        {/* Generate card with Map */}
        {languages.map((item, index) => (
          <div>
            <Card
              key={index}
              title={item.title}
              description={item.description}
              onClick={() => "btn" == "language-selected"}
            />
          </div>
        ))}
      </main>
    </>
  );
}
