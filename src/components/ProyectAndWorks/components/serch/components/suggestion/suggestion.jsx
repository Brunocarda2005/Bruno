import { useEffect } from "react";
import UseSuggestions from "../../../../hooks/UseSuggestions";
import "./Suggestion.css";
import Tag from "./tag/Tag";
import { useTranslation } from "../../../../../../utils/useTranslation";

export default function Suggestions({ handleTagClick, tags }) {
  const { generateDefaultTags } = UseSuggestions();
  const { t } = useTranslation();

  // Generar tags por defecto solo si está vacío
  useEffect(() => {
    if (tags.length === 0) {
      generateDefaultTags();
    }
  }, [tags.length, generateDefaultTags]);

  const activeTags = tags.filter((tag) => tag.active);

  return (
    <section className="suggestion">
      <div className="suggestion__content">
        {activeTags.length > 0 ? (
          activeTags.map((tag) => (
            <Tag
              key={tag.id}
              nombre={tag.nombre}
              color={tag.color}
              id={tag.id}
              click={handleTagClick}
            />
          ))
        ) : (
          <div className="suggestion__empty">
            <p>{t("projects.selectTags")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
