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
          Desarrollador web full-stack con 2 años de experiencia, especializado
          en front-end. Autodidacta y certificado, me enfoco en crear proyectos
          eficientes y centrados en el usuario, superando expectativas y
          aportando valor en cada trabajo.
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
