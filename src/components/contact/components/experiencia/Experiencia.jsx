"use strict";
import "./Experiencia.css";
import { ExperienciasData } from "./Experiencias";

export function Experiencia() {
  const returnEmpresa = (indice) => {
    const empresas = ["Cycle", "ArWeb"];
    return empresas[indice];
  };

  return (
    <main className="experiencia">
      <section className="experiencia__content">
        {ExperienciasData.map((Experiencia) => {
          return (
            <section
              key={Experiencia.id}
              className="experiencia__item__content"
            >
              <div className="experiencia__item__content__blob">
                <span className="experiencia__item__content__blob__span"></span>
              </div>
              <article className="experiencia__item__content__text">
                <div className="experiencia__item__content__text__title">
                  <h3 className="experiencia__item__content__text__title__empresa">
                    {returnEmpresa(Experiencia.empresa)} - {Experiencia.cargo}
                  </h3>
                  <span className="experiencia__item__content__text__title__tiempo">
                    {Experiencia.tiempo}
                  </span>
                </div>
                <p className="experiencia__item__content__text__title__descripcion">
                  {Experiencia.presentacion}
                </p>
              </article>
            </section>
          );
        })}
        <span className="experiencia__content__line"></span>
      </section>
    </main>
  );
}
