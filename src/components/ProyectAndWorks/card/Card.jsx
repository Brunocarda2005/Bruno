import "../ProyectsAndWorks.css";

export default function Card({ icon, a, img }) {
  return (
    <a href={a} target="_blank" className="project_work-card_project_work-cards-card card" rel="noreferrer">
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
    </a>
  );
}
