import { useEffect } from "react";
import UseSuggestions from "../../../../hooks/UseSuggestions";
import "./Suggestion.css";
import Tag from "./tag/Tag";

export default function Suggestions(params) {
  const { contextTags, defaultSuggestions } = UseSuggestions();
  const { handleTagClick } = params;

  // Llama a defaultSuggestions solo si suggestionsActive está vacío
  useEffect(() => {
    if (contextTags.length === 0) {
      defaultSuggestions();
    }
  }, []);

  return (
    <section className="suggestion">
      <div className="suggestion__content">
        {contextTags.map((tag) =>
          tag.active ? (
            <Tag
              key={tag.id}
              nombre={tag.nombre}
              color={tag.color}
              id={tag.id}
              click={handleTagClick}
            />
          ) : null
        )}
      </div>
    </section>
  );
}
