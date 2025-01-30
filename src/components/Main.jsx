import { useState } from "react";
import { languages } from "../languages/languages";
import Card from "../components/Card";

/* Export Main */
export default function Main() {
  const isSelected = true;
  const activePost = languages[0];

  const [activeLanguage, setActiveLanguage] = useState(activePost);

  const handleSelectTag = (item) => {
    const newLanguage = languages.find((language) => language.title === item);
    return setActiveLanguage(newLanguage);
  };
  return (
    <>
      <main>
        {/* Generate card with Map */}
        {languages.map((language) => (
          <ul className="d-inline-flex gap-2 ">
            <li>
              <button
                className={`btn ${
                  activeLanguage.title === language.title
                    ? "btn-warning"
                    : "btn-primary"
                }`}
                key={language.id}
                onClick={() => handleSelectTag(language.title)}
              >
                {language.title}
              </button>
            </li>
          </ul>
        ))}

        {/* Generate card with Map */}

        <div>
          <Card
            key={activeLanguage.id}
            title={activeLanguage.title}
            description={activeLanguage.description}
          />
        </div>
      </main>
    </>
  );
}
