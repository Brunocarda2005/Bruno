"use strict";
import imgLogo from "../../../../static/fotos/fondoLinkedin.jpg";
import { Content } from "../../enum/content";

export default function HeaderContact(params) {
  const { change, content } = params;

  return (
    <aside className="app__contact__conten__about">
      <section className="app__contact__conten__about__profile">
        <picture className="app__contact__conten__about__profile__img">
          <img
            className="app__contact__conten__about__profile__img"
            src={imgLogo}
            alt=""
          />
        </picture>
        <div className="app__contact__conten__about__profile__title">
          <span id="name">Bruno</span>
          <span id="lastName">Cardamone</span>
        </div>
      </section>
      <section className="app__contact__conten__about__aboutText">
        <h5 className="app__contact__conten__about__aboutText__title">
          About me
        </h5>
        <article className="app__contact__conten__about__aboutText__text">
          <p>
            Como Desarrollador Web Full Stack especializado en el front-end, he
            aplicado mis conocimientos técnicos en Cycle Integrated Services,
            trabajando en soluciones de software completas. La creación de
            aplicaciones web con tecnologías como Next.js y AngularJS ha sido el
            núcleo de mi experiencia, asegurando interfaces de usuario
            optimizadas y back-ends robustos. Nuestra colaboración en equipos
            multidisciplinarios ha resultado en proyectos que no solo cumplen
            con los requisitos técnicos, sino que también mejoran la experiencia
            del usuario. Mi carrera está impulsada por una búsqueda constante de
            innovación y eficiencia, siempre con el objetivo de desarrollar
            tecnología que tenga un impacto positivo en la vida de las personas.
          </p>
        </article>
      </section>
      <section className="app__contact__conten__about__change">
        <div className="app__contact__conten__about__change__content">
          <article className="app__contact__conten__about__change__content__links">
            <div
              className={`app__contact__conten__about__change__content__links__link contacto-link show-${
                content === Content.CONTACT
              }`}
              onClick={() => change(Content.CONTACT)}
            >
              Contacto
            </div>
            <div
              className={`app__contact__conten__about__change__content__links__link experiencia-link show-${
                content === Content.EXPERIENCE
              }`}
              onClick={() => change(Content.EXPERIENCE)}
            >
              Experiencia
            </div>
          </article>
        </div>
      </section>
    </aside>
  );
}
