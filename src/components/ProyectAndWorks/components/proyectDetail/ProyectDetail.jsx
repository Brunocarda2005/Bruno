import { FiExternalLink } from "react-icons/fi";
import "./ProyectDetail.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import UseSuggestions from "../../hooks/UseSuggestions";
import UseProyect from "../../hooks/UseProyect";

export default function ProyectDetail() {
  const { ContextProject, saveProject } = UseProyect();
  const { defaultSuggestions } = UseSuggestions();
  const { img, detail } = ContextProject;
  const { titulo, descripcion, a } = detail;

  const clickClose = () => {
    defaultSuggestions();
    saveProject({});
  };

  return (
    <section className="projects-content__cards__proyect details">
      <section className="projects-content__cards__proyect__picture">
        <div className="projects-content__cards__proyect__picture__image">
          <img
            src={img}
            alt={img}
            className="projects-content__cards__proyect__picture__image__img"
          />
        </div>
      </section>
      <section className="projects-content__cards__proyect__detail">
        <aside className="projects-content__cards__proyect__detail__title">
          <a
            href={a}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-content__cards__proyect__detail__ancord"
          >
            {titulo} <FiExternalLink className="icon" />
          </a>

          <span
            className="projects-content__cards__proyect__detail__close"
            onClick={() => clickClose()}
          >
            <IoArrowBackCircleOutline />
          </span>
        </aside>
        <p className="projects-content__cards__proyect__detail__text">
          {descripcion}
        </p>
      </section>
    </section>
  );
}
