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
            Como Desarrollador Web Full Stack en Cycle Integrated Services, me
            especializo en front-end, creando aplicaciones web con Next.js y
            AngularJS, asegurando interfaces optimizadas y back-ends sólidos. Mi
            trabajo en equipos multidisciplinarios ha dado como resultado
            proyectos que mejoran la experiencia del usuario mientras cumplen
            con altos estándares técnicos. Impulsado por la innovación y la
            eficiencia, busco desarrollar tecnología que transforme
            positivamente la vida de las personas.
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
