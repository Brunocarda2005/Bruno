import "./Info.css";
import { useContext, useEffect } from "react";
import Context from "../../../context/Context";
import Cycle from "../../../static/fotos/cycle.jpg";
import ArWeb from "../../../static/fotos/arwebstudio_logo.jpg";
import { useTranslation } from "../../../utils/useTranslation";

export default function InfoSkill() {
  const { globalState } = useContext(Context);
  const { language } = useTranslation();
  const EMPRESAS = [Cycle, ArWeb];

  const empresasByState = () => {
    const empresas = globalState.skills.companies || [];

    return empresas.map((data, index) => {
      return (
        <img
          className="title-skills-content-img-empresa"
          src={EMPRESAS[data]}
          alt={globalState.skills.alt}
          key={index}
        />
      );
    });
  };

  return (
    <main className="title-skills">
      <section className="title-skills-content">
        <div className="title-skills-content-img">
          <picture className="content__empresa">{empresasByState()}</picture>
          <picture>
            <img
              className="title-skills-content-img-empresa"
              src={globalState.skills.img}
              alt={globalState.skills.alt}
            />
          </picture>
        </div>
        <p className="title-skills-content-des">
          {typeof globalState.skills.description === "object"
            ? globalState.skills.description[language] ||
              globalState.skills.description.es
            : globalState.skills.description}
        </p>
        <h4 className="title-skills-content-level">
          {globalState.skills.level}
        </h4>
      </section>
    </main>
  );
}
