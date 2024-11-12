import "./StartAbout.css";
import cv from "../../../../assets/CV INGLES.docx.pdf";
import brunoIMG from "../../../../static/fotos/bruno.webp";
import logoCV from "../../../../static/svg/logoCV.svg";

export default function StartAbout() {
  return (
    <aside className="main__content-grid__container about box-shadow">
      <section className="main__content-grid__container__about">
        <h1 className="main__content-grid__container__about__title">
          Bruno <span className="title_blue">Cardamone</span>
        </h1>
        <p className="main__content-grid__container__about__text">
          Soy un web Developer con 2 años de experiencia, un fullstack,
          orientado a front-end, a lo largo de mi carrera investigué de forma
          autodidacta todas las tecnologías que poseo, haciendo cursos para
          obtener certificaciones, la historia de mi carrera se puede resumir en
          pocas palabras, hambre por conocimiento y demostrarme a mí mismo lo
          que puedo hacer, brindando los mejores servicios a mi alcance. Sé que
          puedo aportar mucho valor y quiero demostrártelo con mi página y mis
          proyectos. En mi página podrás ver ejemplos concretos de cómo
          implemento diseños eficientes, rápidos y orientados al usuario,
          logrando siempre superar las expectativas.
        </p>
        <div className="main__content-grid__container__about__link">
          <a
            className="main__content-grid__container__about__link__ancord"
            download={"Curriculum"}
            href={cv}
          >
            <img
              src={logoCV}
              className="main__content-grid__container__about__link__ancord__img"
              alt="CV Curriculum vitae Hoja de Vida Bruno Cardamone"
            />
          </a>
        </div>
      </section>
      <section className="main__content-grid__container__image">
        <picture className="main__content-grid__container__image__picture">
          <img
            src={brunoIMG}
            alt="bruno cardamone brunocarda2005 brunocardamone brunoCardamone Carda"
            className="main__content-grid__container__image__picture__img"
          />
        </picture>
      </section>
    </aside>
  );
}
