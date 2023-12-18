import Home from "../../../static/svg/home2.svg";
import Skills from "../../../static/svg/skills.svg";
import Projects from "../../../static/svg/portofolio.svg";
import footer from "../../../static/svg/wave_link.svg";
import "./NavAncord.css";

export default function Nav() {
  return (
    <section className="header__nav__content">
      <span className="header__nav__content_show"></span>
      <a href="#home" className="header__nav__content__card true home-link">
        <picture className="header__nav__content__card__img-content">
          <img
            className="header__nav__content__card__img-content__img"
            src={Home}
            alt=""
          />
        </picture>
      </a>
      <a href="#skills" className="header__nav__content__card false skills-link">
        <picture className="header__nav__content__card__img-content">
          <img
            className="header__nav__content__card__img-content__img"
            src={Skills}
            alt=""
          />
        </picture>
      </a>
      <a href="#projects" className="header__nav__content__card false projects-link">
        <picture className="header__nav__content__card__img-content">
          <img
            className="header__nav__content__card__img-content__img"
            src={Projects}
            alt=""
          />
        </picture>
      </a>
      <a href="#footer" className="header__nav__content__card false footer-link">
        <picture className="header__nav__content__card__img-content">
          <img
            className="header__nav__content__card__img-content__img footer_link-img"
            src={footer}
            alt=""
          />
        </picture>
      </a>
    </section>
  );
}
