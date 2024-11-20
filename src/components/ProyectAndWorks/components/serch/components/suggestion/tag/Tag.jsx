import "./Tag.css";
import { IoClose } from "react-icons/io5";

export default function Tag(params) {
  const { nombre, color, click, id } = params;

  const styles = {
    borderColor: color,
  };

  return (
    <div className="tag__content box-shadow" style={styles}>
      <span className="tag__content__text">{nombre}</span>
      <div className="tag__content__close" onClick={() => click(id)}>
        <IoClose />
      </div>
    </div>
  );
}
