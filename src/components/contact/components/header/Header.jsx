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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            excepturi alias laborum earum quidem et, id cum. Ab atque nostrum
            quos dolorem ullam accusamus, esse nemo. Accusamus, asperiores?
            Illum, similique.
          </p>
        </article>
      </section>
      <section className="app__contact__conten__about__change">
        <div className="app__contact__conten__about__change__content">
          <article className="app__contact__conten__about__change__content__links">
            <div
              className={`app__contact__conten__about__change__content__links__link contacto show-${
                content === Content.CONTACT
              }`}
              onClick={() => change(Content.CONTACT)}
            >
              Contacto
            </div>
            <div
              className={`app__contact__conten__about__change__content__links__link experiencia show-${
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
