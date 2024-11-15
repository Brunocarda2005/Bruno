import "./Seeker.css";
import lupaIMG from "../../../../../../static/svg/lupa.svg";

export function Seeker() {
  return (
    <section className="buscador__seeker">
      <div className="buscador__seeker__content">
        <div className="buscador__seeker__content__lupa">
          <img
            src={lupaIMG}
            alt=""
            className="buscador__seeker__content__lupa__img"
          />
        </div>
        <input
          type="text"
          placeholder="Busca una etiqueta"
          className="buscador__seeker__content__input box-shadow"
        />
      </div>
    </section>
  );
}
