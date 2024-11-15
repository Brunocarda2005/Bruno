import Tag from "./tag/Tag";

export default function Suggestions(params) {
  const { tags, handleTagClick } = params;

  return (
    <section className="suggestion">
      {tags.map((tag) =>
        tag.state ? (
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
    </section>
  );
}
