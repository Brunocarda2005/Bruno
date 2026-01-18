import "./CompanyCard.css";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "../../../../utils/useTranslation";

export function CompanyCard({ company }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, language } = useTranslation();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const calcularDuracion = (fechaInicio, fechaFin) => {
    const [mesInicio, añoInicio] = fechaInicio.split("/");
    let mesFin, añoFin;

    if (fechaFin.toLowerCase() === "presente") {
      const hoy = new Date();
      mesFin = hoy.getMonth() + 1;
      añoFin = hoy.getFullYear();
    } else {
      [mesFin, añoFin] = fechaFin.split("/");
    }

    const mesesTotales =
      (parseInt(añoFin) - parseInt(añoInicio)) * 12 +
      (parseInt(mesFin) - parseInt(mesInicio)) +
      1;

    const años = Math.floor(mesesTotales / 12);
    const meses = mesesTotales % 12;

    if (años > 0 && meses > 0) {
      return `${años} ${t("contact.experience.year", { count: años })} ${meses} ${t("contact.experience.month", { count: meses })}`;
    } else if (años > 0) {
      return `${años} ${t("contact.experience.year", { count: años })}`;
    } else {
      return `${meses} ${t("contact.experience.month", { count: meses })}`;
    }
  };

  return (
    <article className={`company-card ${isExpanded ? "expanded" : ""}`}>
      <div className="company-card__header" onClick={toggleExpand}>
        <div className="company-card__header__info">
          <h3 className="company-card__header__info__name">
            {company.nombre[language] || company.nombre.es}
          </h3>
          <p className="company-card__header__info__position">
            {company.nivelFinal[language] || company.nivelFinal.es}
          </p>
        </div>
        <div
          className={`company-card__header__icon ${isExpanded ? "rotated" : ""}`}
        >
          <FiChevronDown />
        </div>
      </div>

      <div className={`company-card__timeline ${isExpanded ? "visible" : ""}`}>
        <div className="company-card__timeline__line"></div>

        {company.posiciones.map((posicion, index) => (
          <div
            key={posicion.id}
            className="company-card__timeline__item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className="company-card__timeline__item__dot"
              style={{ backgroundColor: company.color }}
            ></div>

            <div className="company-card__timeline__item__content">
              <div className="company-card__timeline__item__content__header">
                <h4 className="company-card__timeline__item__content__header__title">
                  {posicion.titulo[language] || posicion.titulo.es}
                </h4>
                <div className="company-card__timeline__item__content__header__date">
                  <span className="date-range">
                    {posicion.fechaInicio} -{" "}
                    {posicion.fechaFin[language] || posicion.fechaFin.es}
                  </span>
                  <span className="date-duration">
                    {calcularDuracion(
                      posicion.fechaInicio,
                      posicion.fechaFin.es,
                    )}
                  </span>
                </div>
              </div>
              <p className="company-card__timeline__item__content__description">
                {posicion.descripcion[language] || posicion.descripcion.es}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
