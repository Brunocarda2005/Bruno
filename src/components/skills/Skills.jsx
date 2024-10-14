import Frontend from "./skills-frontend/Frontend";
import UX_UI from "./skills-ux-ui/UX_UI";
import Backend from "./skills-backend/Backend";
import "./Skills.css";
import { useContext } from "react";
import Context from "../../context/Context";

export default function Skills() {
  const { StateGlobal } = useContext(Context);

  return (
    <section className="social" id="skills">
      <aside className="social__content">
        <section className="title-skills">
          <div className="title-skills-content">
            <picture>
              <img
                className="title-skills-content-img"
                src={StateGlobal.img}
                alt={StateGlobal.alt}
              />
            </picture>
            <p className="title-skills-content-des">{StateGlobal.des}</p>
            <h4 className="title-skills-content-level">{StateGlobal.level}</h4>
          </div>
        </section>
        <section className="social__content__skills">
          <aside className="social__content__skills__cards">
            <Frontend />
            <UX_UI />
            <Backend />
          </aside>
        </section>
      </aside>
    </section>
  );
}
