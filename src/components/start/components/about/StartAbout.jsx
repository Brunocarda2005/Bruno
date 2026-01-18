import "./StartAbout.css";
import cv from "../../../../assets/Bruno-Cardamone-CV.pdf";
import brunoIMG from "../../../../static/fotos/bruno.webp";
import logoCV from "../../../../static/svg/logoCV.svg";
import { useTranslation } from "../../../../utils/useTranslation";
import LanguageSwitch from "../lenguageSwitch/LanguageSwitch";

export default function StartAbout() {
  const { t } = useTranslation();
  return (
    <aside className="main__content-grid__container about box-shadow">
      <section className="main__content-grid__container__about">
        <h1 className="main__content-grid__container__about__title">
          {t("start.about.name")}{" "}
          <span className="title_blue">{t("start.about.lastName")}</span>
        </h1>
        <p className="main__content-grid__container__about__text">
          {t("start.about.description")}
        </p>
        <div className="main__content-grid__container__about__link">
          <a
            className="main__content-grid__container__about__link__ancord"
            download={"Bruno-Cardamone-CV"}
            href={cv}
          >
            <img
              src={logoCV}
              className="main__content-grid__container__about__link__ancord__img"
              alt="CV Curriculum vitae Hoja de Vida Bruno Cardamone"
            />
          </a>

          <LanguageSwitch />
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
