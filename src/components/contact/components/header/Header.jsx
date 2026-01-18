"use strict";
import imgLogo from "../../../../static/fotos/fondoLinkedin.jpg";
import { Content } from "../../enum/content";
import { useTranslation } from "../../../../utils/useTranslation";

export default function HeaderContact(params) {
  const { change, content } = params;
  const { t } = useTranslation();

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
          {t("contact.aboutMe")}
        </h5>
        <article className="app__contact__conten__about__aboutText__text">
          <p>{t("contact.aboutText")}</p>
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
              {t("contact.tabs.contact")}
            </div>
            <div
              className={`app__contact__conten__about__change__content__links__link experiencia-link show-${
                content === Content.EXPERIENCE
              }`}
              onClick={() => change(Content.EXPERIENCE)}
            >
              {t("contact.tabs.experience")}
            </div>
          </article>
        </div>
      </section>
    </aside>
  );
}
