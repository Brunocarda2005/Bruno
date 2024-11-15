import "./Tag.css";

export default function Tag(params) {
  const { nombre, color, click, id } = params;

  const styles = {
    backgroundColor: color,
  };

  return (
    <div className="tag__content" style={styles}>
      <span className="tag__content__text">{nombre}</span>
      <div className="tag__content__close" onClick={() => click(id)}>
        <span className="tag__content__close__span"></span>
      </div>
    </div>
  );
}
