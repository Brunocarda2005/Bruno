import { FiExternalLink } from "react-icons/fi";
import dataLink from "../../../../static/const/DataLinks";
import "./StartLink.css";

export default function StartLink() {
  return (
    <aside className="main__content-grid__container__hidden links">
      {dataLink.map((link) => {
        return (
          <a
            key={link.id}
            className="main__content-grid__container box-shadow"
            href={link.link}
          >
            <span>{link.text}</span>
            <FiExternalLink className="icon" />
          </a>
        );
      })}
    </aside>
  );
}
