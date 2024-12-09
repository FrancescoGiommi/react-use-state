import { useState } from "react";
import { languages } from "../languages/languages";
import Card from "../components/Card";

/* Export Main */
export default function Main() {
  const activeLanguage = languages[0];
  const [activePost, setActivePost] = useState(activeLanguage);

  const handleSelectTag = (item) => {
    const newPost = languages.find((post) => post.title === item);
    console.log(newPost);
  };
  return (
    <>
      <main>
        {/* Generate card with Map */}
        {languages.map((item) => (
          <ul className="d-inline-flex gap-2 ">
            <li>
              <button
                className="btn btn-primary "
                key={item.id}
                onClick={() => handleSelectTag()}
              >
                {item.title}
              </button>
            </li>
          </ul>
        ))}

        {/* Generate card with Map */}

        <div>
          <Card
            key={activePost.id}
            title={activePost.title}
            description={activePost.description}
          />
        </div>
      </main>
    </>
  );
}
