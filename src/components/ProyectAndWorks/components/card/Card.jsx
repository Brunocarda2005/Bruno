import UseProyect from "../../hooks/UseProyect";
import "./Card.css";

export default function Card(params) {
  const { data } = params;
  const { saveSelectedProject } = UseProyect();
  const { icon, img } = data;

  const selectProyect = () => {
    saveSelectedProject(data);
  };

  return (
    <main
      className="project_work-card_project_work-cards-card card"
      onClick={() => {
        selectProyect();
      }}
    >
      <section className="section__img">
        <div className="project_work-card_project_work-cards-card-mark">
          <span></span>
          <div className="mark">
            <img src={icon} alt={icon} />
          </div>
        </div>
        <picture className="section__img__content">
          <img src={img} alt={img} className="section__img__content__img" />
        </picture>
      </section>
    </main>
  );
}
