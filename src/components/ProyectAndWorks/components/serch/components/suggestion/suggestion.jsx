import "./Suggestion.css";
import Tag from "./tag/Tag";

export default function Suggestions(params) {
  const { tags, handleTagClick } = params;

  return (
    <section className="suggestion">
      <div className="suggestion__content">
        {tags.map((tag) =>
          tag.active ? (
            <Tag
              key={tag.id}
              nombre={tag.nombre}
              color={tag.color}
              id={tag.id}
              click={handleTagClick}
            />
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
}
